import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList, TypeTheme} from '../types';
import {Button, Input, AppContainer} from '../components';
import {EMAIL_REGEX} from '../utils/constants';
import {useForm} from 'react-hook-form';
import {styled} from 'styled-components/native';

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
      <Inner>
        <StyledTitle>Log In</StyledTitle>
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
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          secureTextEntry
        />
        <ButtonWrapper>
          <Button text="Log In" onPress={handleSubmit(onSignIn)} />
        </ButtonWrapper>
      </Inner>
    </AppContainer>
  );
}

const StyledTitle = styled.Text<TypeTheme>`
  font-size: ${props => props.theme.units.rem(2.5)};
  margin-bottom: ${props => props.theme.dimensions.vh(2)};
  color: ${props => props.theme.colors.black};
`;

const Inner = styled.View<TypeTheme>`
  padding-top: ${props => props.theme.dimensions.vh(5)};
`;

const ButtonWrapper = styled.View<TypeTheme>`
  margin-top: ${props => props.theme.dimensions.vh(2)};
`;
