import React from 'react';
import {TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

export const Input = ({control, name, placeholder, secureTextEntry}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange, onBlur}}) => {
        return (
          <>
            <StyledInputWrapper>
              <TextInput
                value={value}
                onChangeText={textVal => onChange(textVal)}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
              />
            </StyledInputWrapper>
          </>
        );
      }}
    />
  );
};

const StyledInputWrapper = styled.View<TypeTheme>`
  background-color: #fff;
  width: 100%;
  border-color: ${props => props.theme.colors.black};
  border-width: 2;
  border-radius: 0;
  padding-horizontal: ${props => props.theme.dimensions.vw(2)};
  margin-vertical: ${props => props.theme.dimensions.vh(1)};
`;
