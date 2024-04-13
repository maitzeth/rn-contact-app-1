import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../types';
// ScreenComponentType<ParamListBase, "Login"> | undefined

type LoginScreenProps = NativeStackScreenProps<StackParamList, 'LoginScreen'>;
// interface Props extends NativeStackHeaderProps {}

export function LoginScreen({navigation}: LoginScreenProps) {
  console.log(navigation);
  // return (
  //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     <ActivityIndicator />
  //   </View>
  // );

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>This is login</Text>
      {/* <Button title="Home" onPress={() => navigation.navigate('Home')} /> */}
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
