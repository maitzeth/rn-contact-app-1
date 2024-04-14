import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, AppContainer} from '../components';
import {api} from '../api';

export function HomeScreen() {
  const handlePress = async () => {
    await api.logout();
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
