import {create} from 'zustand';
import Fakerator from 'fakerator';
import {User} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Simulation of a network request
export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

type AuthData = {
  email: string;
  password: string;
};

interface AuthState {
  user: User | undefined | null;
  signIn: (data: AuthData) => Promise<void>;
  checkAuth: () => Promise<boolean>;
  logout: () => Promise<void>;
}

const fakerator = Fakerator();

export const useAuthState = create<AuthState>(set => ({
  user: undefined,
  signIn: async data => {
    await sleep(750);

    const authData = {
      firstName: fakerator.names.firstName(),
      email: data.email,
    };

    await AsyncStorage.setItem('auth', JSON.stringify(authData));

    set(state => {
      return {
        ...state,
        user: authData,
      };
    });
  },
  checkAuth: async () => {
    await sleep(750);

    const data = await AsyncStorage.getItem('auth');

    if (data) {
      const parsedData = JSON.parse(data);

      set(state => {
        return {
          ...state,
          user: parsedData ? parsedData : undefined,
        };
      });

      return true;
    }

    return false;
  },
  logout: async () => {
    await sleep(750);
    await AsyncStorage.removeItem('auth');
    set(state => {
      return {
        ...state,
        user: undefined,
      };
    });
  },
}));
