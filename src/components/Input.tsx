import React from 'react';
import {TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import type {UseControllerProps} from 'react-hook-form';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

type Props = {
  control: UseControllerProps['control'];
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  rules: UseControllerProps['rules'];
  disabled?: boolean;
};

export const Input = ({
  control,
  name,
  placeholder,
  secureTextEntry,
  rules = {},
  disabled,
}: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => {
        return (
          <>
            <StyledInputWrapper $error={Boolean(error)}>
              <TextInput
                editable={!disabled}
                value={value}
                onChangeText={textVal => onChange(textVal)}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
              />
            </StyledInputWrapper>
            {error && (
              <StyledInputErrorMsg>
                {error?.message ?? 'Error'}
              </StyledInputErrorMsg>
            )}
          </>
        );
      }}
    />
  );
};

const StyledInputWrapper = styled.View<
  TypeTheme & {
    $error: boolean;
  }
>`
  background-color: #fff;
  width: 100%;
  border-color: ${({theme, $error}) =>
    $error ? theme.colors.red : theme.colors.black};
  border-width: ${props => props.theme.units.rem(0.2)};
  border-radius: 0;
  padding-horizontal: ${props => props.theme.dimensions.vw(2)};
  margin-top: ${props => props.theme.dimensions.vh(1)};
`;

const StyledInputErrorMsg = styled.Text<TypeTheme>`
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.units.rem(0.85)};
  font-weight: bold;
`;
