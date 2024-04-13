import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>This is home</Text>
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
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
