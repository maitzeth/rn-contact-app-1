import {rem, vw, vh} from './units';

export const theme = {
  theme: {
    colors: {
      black: '#0f0f0f',
      white: '#ecf0f1',
      red: '#e74c3c',
      gray: '#bdc3c7',
    },
    units: {
      rem,
    },
    dimensions: {
      vw,
      vh,
    },
  },
} as const;
