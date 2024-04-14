import React from 'react';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

type Props = {
  onPress: () => void;
  text: string;
};

export const Button = ({onPress, text}: Props) => {
  return (
    <StyledButton
      onPress={onPress}
      style={({pressed}) => [pressed ? {opacity: 0.9} : {}]}>
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
