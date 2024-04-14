import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login';
import {StackParamList} from '../types';
import {HomeScreen} from '../screens/Home';
import {DetailsScreen} from '../screens/Details';
import {api, TypeAPI} from '../api';
import {View, ActivityIndicator} from 'react-native';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  const [user, setUser] = React.useState<TypeAPI | undefined | null>(undefined);

  const checkUser = async () => {
    try {
      const authResponse = await api.checkAuth();
      setUser(authResponse);
    } catch (e) {
      setUser(null);
    }
  };

  React.useEffect(() => {
    checkUser();
  }, []);

  if (user === undefined) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <React.Fragment>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: 'Home',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DetailsScreen"
              component={DetailsScreen}
              options={{title: 'Details'}}
            />
          </React.Fragment>
        ) : (
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
