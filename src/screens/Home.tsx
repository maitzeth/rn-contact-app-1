import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, AppContainer} from '../components';
import {useAuthState} from '../store/userStore';

export function HomeScreen() {
  const {logout} = useAuthState();

  const handlePress = async () => {
    await logout();
  };

  return (
    <AppContainer>
      <Text style={styles.headingStyle}>This is home</Text>
      <Button text="Logout" onPress={handlePress} />
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
