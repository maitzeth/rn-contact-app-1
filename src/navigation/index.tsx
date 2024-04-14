import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login';
import {StackParamList} from '../types';
import {HomeScreen} from '../screens/Home';
import {DetailsScreen} from '../screens/Details';
import {View, ActivityIndicator} from 'react-native';
import {useAuthState} from '../store/userStore';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  const {user, checkAuth, setUser} = useAuthState();

  const checkUser = React.useCallback(async () => {
    try {
      const authResponse = await checkAuth();
      setUser(authResponse);
    } catch (e) {
      setUser(null);
    }
  }, [checkAuth, setUser]);

  React.useEffect(() => {
    checkUser();
  }, [checkUser, user]);

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
