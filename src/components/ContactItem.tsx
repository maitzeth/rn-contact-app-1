import React from 'react';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

type Props = {
  name: string;
  phone: string;
  handlePress: () => void;
};

export const ContactItem = ({name, phone, handlePress}: Props) => {
  return (
    <Wrapper
      onPress={() => handlePress()}
      style={({pressed}) => [pressed ? {opacity: 0.9} : {}]}>
      <StyledTitle>{name}</StyledTitle>
      <StyledSubTitle>{phone}</StyledSubTitle>
    </Wrapper>
  );
};

const Wrapper = styled.Pressable<TypeTheme>`
  flex: 1;
  background-color: ${props => props.theme.colors.gray};
  margin-top: ${props => props.theme.dimensions.vh(1)};
  padding: ${props => props.theme.dimensions.vh(1)};
  padding-top: ${props => props.theme.dimensions.vh(2)};
  padding-bottom: ${props => props.theme.dimensions.vh(2)};
`;

const StyledTitle = styled.Text<TypeTheme>`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.units.rem(1.5)};
`;

const StyledSubTitle = styled.Text<TypeTheme>`
  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.units.rem(1)};
`;
