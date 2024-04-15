import {theme} from '../utils/theme';

export type TypeTheme = typeof theme;

export type StackParamList = {
  Login: {};
  Home: {};
  Details: {
    itemId: string;
  };
};

export type User = {
  email: string;
  firstName: string;
};
