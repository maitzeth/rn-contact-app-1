import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList} from '../types';
import {Button, Input, AppContainer} from '../components';
import {EMAIL_REGEX} from '../utils/constants';
import {useForm} from 'react-hook-form';

type LoginScreenProps = NativeStackScreenProps<StackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: LoginScreenProps) {
  const {control, handleSubmit} = useForm();

  const onSignIn = (data: any) => {
    console.log(data, navigation);
    console.log('its happening... everybody stay f.. calm!');
  };

  // return (
  //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     <ActivityIndicator />
  //   </View>
  // );

  return (
    <AppContainer>
      <Input
        name="email"
        control={control}
        placeholder="Enter your email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Invalid email address',
          },
        }}
      />
      <Input
        name="password"
        control={control}
        placeholder="Enter your password"
        rules={{required: 'Password is required'}}
        secureTextEntry
      />
      <Button text="Log In" onPress={handleSubmit(onSignIn)} />
    </AppContainer>
  );
}
