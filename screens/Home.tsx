import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function HomeScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>This is home</Text>
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
