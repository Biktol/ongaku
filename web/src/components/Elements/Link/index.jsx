import { Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { theme } from '@/stitches.config.js';

const variants = {
  primary: theme.colors.primaryTextContrast.value,
  accent: theme.colors.accentSolid.value,
};

export function Link({ to, variant = 'primary', underline = true, children }) {
  const hasUnderline = underline ? { textDecoration: 'underline' } : null;
  return (
    <ChakraLink as={RouterLink} to={to} color={variants[variant]} {...hasUnderline}>
      {children}
    </ChakraLink>
  );
}