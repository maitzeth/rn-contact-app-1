import * as React from 'react';
import {StackParamList, TypeTheme} from '../types';
import contacts from '../data.json';
import styled from 'styled-components/native';
import {AppContainer} from '../components';
import type {RouteProp} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const mapById = new Map(contacts.map(item => [item.id, item]));

type DetailsScreenRouteProps = RouteProp<StackParamList, 'Details'>;

export function DetailsScreen() {
  const route = useRoute<DetailsScreenRouteProps>();
  const {itemId} = route.params;
  const contactDetails = mapById.get(itemId);

  return (
    <AppContainer>
      <Inner>
        <Label>
          Name: <LabelContent>{contactDetails?.name}</LabelContent>
        </Label>
        <Label>
          Email: <LabelContent>{contactDetails?.email}</LabelContent>
        </Label>
        <Label>
          Phone: <LabelContent>{contactDetails?.phone}</LabelContent>
        </Label>
        <Label>
          Country: <LabelContent>{contactDetails?.country}</LabelContent>
        </Label>
      </Inner>
    </AppContainer>
  );
}

const Inner = styled.View<TypeTheme>`
  padding-top: ${props => props.theme.dimensions.vh(5)};
  padding-bottom: ${props => props.theme.dimensions.vh(5)};
  display: flex;
  gap: ${props => props.theme.dimensions.vh(2)};
`;

const Label = styled.Text<TypeTheme>`
  font-size: ${props => props.theme.units.rem(1)};
`;

const LabelContent = styled.Text`
  font-weight: bold;
`;
