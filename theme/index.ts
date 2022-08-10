import { extendTheme } from '@chakra-ui/react';
import comps from './components';
import { fontSizes } from './fonts';

import colors from './colors';
export const theme = extendTheme({
  fontSizes,
  colors,
  components: {
    ...comps,
  },
  breakpoints: {
    sm: '400px',
    md: '500px',
    lg: '786px',
    xl: '1024px',
    '2xl': '1650px',
  },
});
