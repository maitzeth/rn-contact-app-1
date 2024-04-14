import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login';
import {StackParamList} from '../types';
import {HomeScreen} from '../screens/Home';
import {DetailsScreen} from '../screens/Details';
import {ActivityIndicator} from 'react-native';
import {useAuthState} from '../store/userStore';
import {styled} from 'styled-components/native';

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
      <StyledActivity>
        <ActivityIndicator />
      </StyledActivity>
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

const StyledActivity = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
