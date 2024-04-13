import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function LoginScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>This is login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
