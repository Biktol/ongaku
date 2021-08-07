import { createCss } from '@stitches/react';
import {
  teal,  
  amber,
  red, 
  indigo,
  mauveDark, 
  crimsonDark, 
} from '@radix-ui/colors';

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        ...teal,
        ...amber,
        ...red,
        ...indigo,
        ...mauveDark,
        ...crimsonDark,
        
        primaryBase: '$mauve1',
        primaryBgSubtle: '$mauve2',
        primaryBg: '$mauve3',
        primaryBgHover: '$mauve4',
        primaryBgActive: '$mauve5',
        primaryLine: '$mauve6',
        primaryBorder: '$mauve7',
        primaryBorderHover: '$mauve8',
        primarySolid: '$mauve9',
        primarySolidHover: '$mauve10',
        primaryText: '$mauve11',
        primaryTextContrast: '$mauve12',

        accentBase: '$crimson1',
        accentBgSubtle: '$crimson2',
        accentBg: '$crimson3',
        accentBgHover: '$crimson4',
        accentBgActive: '$crimson5',
        accentLine: '$crimson6',
        accentBorder: '$crimson7',
        accentBorderHover: '$crimson8',
        accentSolid: '$crimson9',
        accentSolidHover: '$crimson10',
        accentText: '$crimson11',
        accentTextContrast: '$crimson12',

        successBase: '$teal1',
        successBgSubtle: '$teal2',
        successBg: '$teal3',
        successBgHover: '$teal4',
        successBgActive: '$teal5',
        successLine: '$teal6',
        successBorder: '$teal7',
        successBorderHover: '$teal8',
        successSolid: '$teal9',
        successSolidHover: '$teal10',
        successText: '$teal11',
        successTextContrast: '$teal12',

        dangerBase: '$red1',
        dangerBgSubtle: '$red2',
        dangerBg: '$red3',
        dangerBgHover: '$red4',
        dangerBgActive: '$red5',
        dangerLine: '$red6',
        dangerBorder: '$red7',
        dangerBorderHover: '$red8',
        dangerSolid: '$red9',
        dangerSolidHover: '$red10',
        dangerText: '$red11',
        dangerTextContrast: '$red12',

        warningBase: '$amber1',
        warningBgSubtle: '$amber2',
        warningBg: '$amber3',
        warningBgHover: '$amber4',
        warningBgActive: '$amber5',
        warningLine: '$amber6',
        warningBorder: '$amber7',
        warningBorderHover: '$amber8',
        warningSolid: '$amber9',
        warningSolidHover: '$amber10',
        warningText: '$amber11',
        warningTextContrast: '$amber12',

        infoBase: '$amber1',
        infoBgSubtle: '$amber2',
        infoBg: '$amber3',
        infoBgHover: '$amber4',
        infoBgActive: '$amber5',
        infoLine: '$amber6',
        infoBorder: '$amber7',
        infoBorderHover: '$amber8',
        infoSolid: '$amber9',
        infoSolidHover: '$amber10',
        infoText: '$amber11',
        infoTextContrast: '$amber12',
      },
      fonts: {
        main: 'Segoe UI',
        fallback: 'Helvetica',
      },
      fontSizes: {
        tiny: '0.625rem',
        xs: '.75rem',
        sm: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      space: {
        1: '4px',
        1.5: '6px',
        2: '8px',
        2.5: '10px',
        3: '12px',
        3.5: '14px',
        4: '16px',
        4.5: '24px',
        5: '32px',
        5.5: '48px',
        6: '64px',
        6.5: '96px',
        7: '128px',
        7.5: '192px',
        8: '256px',
        9: '384px',
        10: '512px',
        11: '640px',
        12: '768px',
        '1/2': '50%',
      },
      /**
       * If none of these work (or feel right), use percentages.
       * This is base 20, spacing is base 16.
       */
      sizes: {
        1: '10px',
        2: '15px',
        3: '20px',
        3.5: '25px',
        4: '30px',
        5.5: '35px',
        6: '40px',
        6.5: '45px',
        7: '60px',
        7.5: '65px',
        8: '80px',
        8.5: '85px',
        9: '120px',
        10: '160px',
        11: '240px',
        12: '320px',
        13: '480px',
        14: '640px',
        15: '800px',
        16: '960px',
      },
      letterSpacings: {
        light: '2px',
        basic: '4px',
        strong: '8px',
      },
      shadows: {
        underlineShadow: '0 4px 0 -2px',
        shadow1: '0 1px 3px hsla(0, 0%, .2)',
        shadow2: '0 4px 6px hsla(0, 0%, .2)',
        shadow3: '0 5px 15px hsla(0, 0%, .2)',
        shadow4: '0 10px 24px hsla(0, 0%, .2)',
        shadow5: '0 15px 35px hsla(0, 0%, .2)',
      },
    },
    media: {},
    utils: {},
  });
