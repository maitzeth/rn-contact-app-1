import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../types';
import {Button, Input, AppContainer} from '../components';
// ScreenComponentType<ParamListBase, "Login"> | undefined

import {useForm} from 'react-hook-form';

type LoginScreenProps = NativeStackScreenProps<StackParamList, 'LoginScreen'>;
// interface Props extends NativeStackHeaderProps {}

export function LoginScreen({navigation}: LoginScreenProps) {
  const {control, handleSubmit} = useForm();

  const onSignIn = (data: any) => {
    console.log(data);
    console.log('its happening... everybody stay f.. calm!');
  };
  // return (
  //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     <ActivityIndicator />
  //   </View>
  // );

  return (
    <AppContainer>
      <Input name="email" control={control} placeholder="Enter your email" />
      <Input
        name="password"
        control={control}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSubmit(onSignIn)} />
    </AppContainer>
  );
}
