import { Badge, Flex, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

import { Card } from './index';

import { Link } from '@/components/Elements';
import { theme } from '@/stitches.config.js';

export function SongCard({ cover, name, isExplicit, type, authors, year }) {
  return (
    <Card cover={cover} type="song">
      <Flex justify="end">
        <Text fontWeight="bold" wordBreak="break-word">
          {name}
        </Text>
        <Spacer />
        <Badge marginTop="5px" marginRight="5px" height="100%">
          {year}
        </Badge>
        {isExplicit && (
          <Badge
            marginTop="5px"
            marginRight="5px"
            height="100%"
            bg={theme.colors.dangerSolid.value}
            color="whiteAlpha.900"
          >
            E
          </Badge>
        )}
        <Badge
          marginTop="5px"
          color="whiteAlpha.900"
          bg={theme.colors.accentSolid.value}
          position="absolute"
          top={1}
          left={1}
        >
          {type}
        </Badge>
      </Flex>
      <Text color="whiteAlpha.700" fontSize="sm">
        {authors.split(',').map((author, index) => (
          <Link
            to={`/artist/${author.split(' ').join('-').toLowerCase()}`}
            key={index}
            underline={false}
            variant="gray"
          >
            {author}
          </Link>
        ))}
      </Text>
    </Card>
  );
}
