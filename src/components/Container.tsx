import * as React from 'react';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

const StyledView = styled.View<TypeTheme>`
  padding-left: ${props => props.theme.dimensions.vw(4)};
  padding-right: ${props => props.theme.dimensions.vw(4)};
`;

export const AppContainer = ({children}: React.PropsWithChildren) => {
  return <StyledView>{children}</StyledView>;
};
