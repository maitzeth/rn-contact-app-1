import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, AppContainer} from '../components';
import {useAuthState} from '../store/userStore';

export function HomeScreen() {
  const [loading, setLoading] = React.useState(false);
  const {logout} = useAuthState();

  const handlePress = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  };

  return (
    <AppContainer>
      <Text style={styles.headingStyle}>This is home</Text>
      <Button
        text="Logout"
        loading={loading}
        onPress={handlePress}
        disabled={loading}
      />
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
