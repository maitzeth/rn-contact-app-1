import {create} from 'zustand';
import Fakerator from 'fakerator';
import {User} from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// checkAuth: () =>
//   set(state => {
//     console.log(state);
//     return state;
//   }),
// logout: () =>
//   set(state => {
//     console.log(state);
//     return state;
//   }),

// Simulation of a network request
export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

type AuthData = {
  email: string;
  password: string;
};

interface AuthState {
  user: User | undefined | null;
  signIn: (data: AuthData) => void;
  checkAuth: () => Promise<User | null>;
  setUser: (data: User | null) => void;
  logout: () => Promise<void>;
}

const fakerator = Fakerator('es-ES');

export const useAuthState = create<AuthState>(set => ({
  user: undefined,
  signIn: async data => {
    await sleep(750);

    const authData = {
      fullName: fakerator.names.name(),
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
  setUser: user => {
    set(state => {
      return {
        ...state,
        user,
      };
    });
  },
  checkAuth: async () => {
    await sleep(750);

    const data = await AsyncStorage.getItem('auth');
    if (data) {
      return JSON.parse(data) as User;
    } else {
      return null;
    }
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
