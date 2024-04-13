import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login';
import {StackParamList} from '../types';
import {HomeScreen} from '../screens/Home';
import {DetailsScreen} from '../screens/Details';

const Stack = createNativeStackNavigator<StackParamList>();

export const Navigation = () => {
  const [user] = React.useState<unknown>(undefined);

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
