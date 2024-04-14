import {theme} from '../utils/theme';

export type TypeTheme = typeof theme;

export type StackParamList = {
  LoginScreen: {};
  HomeScreen: {};
  DetailsScreen: {};
};

export type User = {
  email: string;
  fullName: string;
};
