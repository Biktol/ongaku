import {
  BadRequestException as BadRequest,
  InternalServerErrorException as InternalServerError,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, Artist, Band, UserMetadata } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import * as dayjs from 'dayjs';

import { UserService } from '../user/user.service';
import { ArtistService } from '../artist/artist.service';
import { ArtistRegisterDTO, LoginDTO, VerifyEmailDTO } from './auth.dto';
import { Entity, UserRegisterAndMetadata, UserWithVerifiedEmail } from './auth.interface';

import { PrismaService } from '@/internal/services';
import { getHash } from '@/internal/helpers';
import { Conflict } from '@/internal/exceptions';
import { PrismaError } from '@/internal/constants';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private user: UserService,
    private artist: ArtistService,
  ) {}

  async createUser(user: UserRegisterAndMetadata) {
    const { ipAddress, password, birthdate, ...userData } = user;
    const hashedPassword = await hash(password, 10);

    try {
      const newUser = await this.prisma.user.create({
        data: {
          ...userData,
          password: hashedPassword,
          birthdate: dayjs(birthdate).toDate(),
          userMetadata: {
            create: {
              ipAddress,
              createdAt: new Date(),
              verifiedEmail: false,
              active: true,
            },
          },
        },
      });

      return {
        user: {
          email: newUser.email,
          username: newUser.username,
          verifiedEmail: false,
          role: 'USER',
        },
      };
    } catch (error) {
      this.handleAccountCreationError(error);
    }
  }

  async createArtist(artist: ArtistRegisterDTO) {
    let newArtist: Artist | Band;
    const { isBand, bandName, members, artisticName, ...artistData } = artist;

    const hashedPassword = await hash(artistData.password, 10);

    try {
      if (isBand) {
        newArtist = await this.prisma.artist.create({
          data: {
            ...artistData,
            password: hashedPassword,
            verifiedEmail: false,
            band: {
              create: {
                name: bandName,
                members,
              },
            },
          },
        });
      } else {
        newArtist = await this.prisma.artist.create({
          data: {
            ...artistData,
            password: hashedPassword,
            verifiedEmail: false,
            artisticName,
          },
        });
      }

      return {
        artist: {
          email: newArtist.email,
          artisticName: newArtist.artisticName,
          verifiedEmail: false,
          role: 'ARTIST',
        },
      };
    } catch (error) {
      this.handleAccountCreationError(error);
    }
  }

  private handleAccountCreationError(error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === PrismaError.UniqueConstraint
    ) {
      let target = error?.meta['target'][0];

      if (target === 'artistic_name') {
        target = target.split('_').join(' ');
      }

      throw new Conflict(`The supplied ${target} is already being used`);
    } else {
      throw new InternalServerError(
        'Something went wrong while trying to create your account, try again later',
      );
    }
  }

  async login(credentials: LoginDTO) {
    let entity: Entity;

    if (credentials.isArtist) {
      entity = await this.artist.getByEmail(credentials.email);
    } else {
      entity = (await this.user.getByEmail(credentials.email)) as UserWithVerifiedEmail;
    }

    if (!entity) {
      throw new BadRequest('Wrong credentials provided');
    }

    const passwordsMatch = await compare(credentials.password, entity.password);

    if (!passwordsMatch) {
      throw new BadRequest('Wrong credentials provided');
    }

    const verifiedEmail = credentials.isArtist
      ? entity.verifiedEmail
      : entity['userMetadata'].verifiedEmail;

    return {
      entity: {
        id: entity.id,
        email: entity.email,
        role: entity.role,
        verifiedEmail,
      },
    };
  }

  async verifyEmail(data: VerifyEmailDTO) {
    let entity: Artist | UserMetadata;

    if (data.hash === getHash(data.email)) {
      if (data.role === 'USER') {
        entity = await this.user.updateMetadata(data.id, { verifiedEmail: true });
      } else if (data.role === 'ARTIST') {
        entity = await this.artist.update(data.id, { verifiedEmail: true });
      }
    } else {
      throw new BadRequest(
        'The link does not correspond the account, please request a new one and try again',
      );
    }

    if (!entity) {
      throw new InternalServerError(
        'Something went wrong while trying to verify your account, try again',
      );
    }

    return {
      verifiedEmail: entity.verifiedEmail,
    };
  }
}
