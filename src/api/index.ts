import AsyncStorage from '@react-native-async-storage/async-storage';

export type TypeAPI = {
  email: string;
  isLoggedIn: boolean;
};

// Simulation of a network request
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  signIn: async (data: {email: string; password: string}): Promise<TypeAPI> => {
    await sleep(750);

    try {
      const authData = {
        email: data.email,
        isLoggedIn: true,
      };

      const jsonValue = JSON.stringify(authData);
      await AsyncStorage.setItem('auth', jsonValue);
      return authData;
    } catch (_e) {
      throw new Error('Something bad happened...');
    }
  },
  checkAuth: async (): Promise<TypeAPI | null> => {
    await sleep(750);

    const data = await AsyncStorage.getItem('auth');
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  },
  logout: async () => {
    await sleep(750);

    await AsyncStorage.removeItem('auth');
  },
};
