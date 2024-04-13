import * as React from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';
import type {NativeStackHeaderProps} from '@react-navigation/native-stack';

interface Props extends NativeStackHeaderProps {
  someProp: string;
  anotherProp: string;
}

export function LoginScreen({navigation}: Props) {
  if (true) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>This is login</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    flex: 1,
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
