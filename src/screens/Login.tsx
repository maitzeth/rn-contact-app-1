import * as React from 'react';
import type {FieldElement} from 'react-hook-form';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {styled} from 'styled-components/native';
import {AppContainer, Button, Input} from '../components';
import {useAuthState} from '../store/userStore';
import {TypeTheme} from '../types';
import {EMAIL_REGEX} from '../utils/constants';

type SignInData = {
  email: string;
  password: string;
};

export function LoginScreen() {
  const [loading, setLoading] = React.useState(false);
  const {control, handleSubmit} = useForm();
  const {signIn} = useAuthState();

  const onSignIn = async (data: FieldElement) => {
    setLoading(true);

    const {email, password} = data as SignInData;
    try {
      await signIn({
        email,
        password,
      });

      setLoading(false);
    } catch (e) {
      setLoading(false);
      if (e instanceof Error) {
        Alert.alert(e.message);
      } else {
        Alert.alert('Something went wrong');
      }
    }
  };

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
          <Button
            text="Log In"
            loading={loading}
            onPress={handleSubmit(onSignIn)}
            disabled={loading}
          />
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
