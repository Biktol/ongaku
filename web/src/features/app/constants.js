import { keyframes } from '@chakra-ui/react';

import { theme } from '@/stitches.config.js';

export const GRID_COLUMN_HEIGHT = '300px';
export const GRADIENTS = {
  // old one used on the banner
  // top: `linear-gradient(180deg, ${theme.colors.primaryBase.value} -5%, rgba(255,255,255,0) 15%)`,
  top: `linear-gradient(180deg, ${theme.colors.primaryBase.value} -60%, rgba(255,255,255,0) 100%)`,
  bottom: `linear-gradient(0, ${theme.colors.primaryBase.value} 5%, rgba(255,255,255,0) 60%)`,
};

const fadeOutSteps = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
export const FADE_OUT_ANIMATION = `${fadeOutSteps} 300ms linear`;

/**
 * Mock data that will be used temporarily.
 */

export const FEATURED_ARTIST = {
  name: '(G) I-DLE',
  amountOfFollowers: '2,123,505 followers',
  description: `South Korean girl group formed by Cube Entertainment in 2018. The group consists of
  five members: Miyeon, Minnie, Soyeon, Yuqi, and Shuhua. Originally a six-piece Soojin
  departed from the group on August 14, 2021.`,
  songs: [
    {
      name: 'OH MY GOD',
      isExplicit: true,
      type: 'SONG',
      cover: '/assets/images/static-oh-my-god.jpg',
      authors: '(G) I-DLE',
      year: 2020,
    },
    {
      name: 'I TRUST',
      isExplicit: false,
      type: 'EP',
      cover: '/assets/images/static-i-trust.webp',
      authors: '(G) I-DLE',
      year: 2020,
    },
    {
      name: 'MORE',
      isExplicit: false,
      type: 'SINGLE',
      cover: '/assets/images/static-more.jpg',
      authors: '(G) I-DLE, K/DA and more',
      year: 2020,
    },
  ],
};
export const RECENTLY_PLAYED = [
  {
    cardType: 'playlist',
    name: 'SOYEON FOCUS',
    cover: '/assets/images/static-playlist-soyeon.jpeg',
    likes: 832,
    amountOfSongs: 17,
    author: 'Zapmal',
  },
  {
    cardType: 'song',
    name: 'SAQUENME DE VENEZUELA',
    isExplicit: true,
    type: 'SONG',
    cover: '/assets/images/static-song-saquenme-de-vzla.jpeg',
    authors: 'Yung Iverson',
    year: 2019,
  },
  {
    cardType: 'playlist',
    name: 'Bad BOI',
    cover: '/assets/images/static-playlist-bad-boi.jpg',
    likes: 34,
    amountOfSongs: 77,
    author: 'bom_banal',
  },
  {
    cardType: 'playlist',
    name: '- Risas -',
    cover: '/assets/images/static-playlist-risas.png',
    likes: 444,
    amountOfSongs: 4,
    author: 'X_Blackie_X',
  },
  {
    cardType: 'playlist',
    name: 'Rough Waves',
    cover: '/assets/images/static-playlist-rough-waves.png',
    likes: 3094,
    amountOfSongs: 102,
    author: 'sad_tuna',
  },
  {
    cardType: 'playlist',
    name: 'AVARICIA',
    cover: '/assets/images/static-playlist-avaricia.png',
    likes: 487,
    amountOfSongs: 412,
    author: 'pur_oblingbling',
  },
];
export const SUGGESTED_ARTISTS = [
  {
    name: 'Mori Calliope',
    amountOfFollowers: '892,092',
    image: '/assets/images/static-artist-mori.jpg',
  },
  {
    name: 'TWICE',
    amountOfFollowers: '10,763,588',
    image: '/assets/images/static-artist-twice.jpeg',
  },
  {
    name: 'The Gentlemen',
    amountOfFollowers: '750,379',
    image: '/assets/images/static-artist-gentlemen.jpg',
  },
  {
    name: 'Yung Iverson',
    amountOfFollowers: '102,838',
    image: '/assets/images/static-artist-yung-iverson.jpg',
  },
];
export const PERFECT_FOR_YOU = [
  {
    name: 'DEMONDICE',
    youtubeChannelURL: 'https://youtube.com/DEMONDICEKAREN',
    pageURL: '/artist/DEMONDICE',
    description:
      'Karen, better known online as DEMONDICE, is an American YouTuber living in Japan who is most known for her rap, MV production and animations',
    genres: 'Hip-Hop, Rap, Jazz Rap, Pop Rap',
    monthlyListeners: '403,871',
    followers: '103,948',
    image: '/assets/images/static-artist-og-mori.jpeg',
  },
];
export const TRENDING = [
  {
    cardType: 'song',
    name: 'Human',
    isExplicit: false,
    type: 'SONG',
    cover: '/assets/images/static-trending-human.jpg',
    authors: "Rag'n'Bone Man",
    year: 2017,
  },
  {
    cardType: 'song',
    name: 'Kawaki wo Ameku',
    isExplicit: false,
    type: 'EP',
    cover: '/assets/images/static-trending-kawaki-wo-ameku.jpg',
    authors: 'Minami',
    year: 2019,
  },
  {
    cardType: 'artist',
    name: 'Bea Miller',
    amountOfFollowers: '8,403,812',
    image: '/assets/images/static-trending-bea-miller.jpg',
  },
  {
    cardType: 'artist',
    name: 'PVRIS',
    amountOfFollowers: '3,111,992',
    image: '/assets/images/static-trending-pvris.jpg',
  },
  {
    cardType: 'song',
    name: 'Speed of Light',
    isExplicit: false,
    type: 'SINGLE',
    cover: '/assets/images/static-trending-speed-of-light.jpg',
    authors: 'DJ Okawari, AI ninomiya',
    year: 2019,
  },
];