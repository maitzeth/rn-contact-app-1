import React from 'react';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

export const Button = ({onPress, text}: any) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledText>{text}</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.Pressable<TypeTheme>`
  width: 100%;
  background-color: ${props => props.theme.colors.black};
  padding: 15px;
  margin-vertical: 5px;
  align-items: center;
  border-radius: 6px;
`;

const StyledText = styled.Text<TypeTheme>`
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  text-transform: uppercase;
`;
