import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList, TypeTheme} from '../types';
import contacts from '../data.json';
import styled from 'styled-components/native';
import {AppContainer} from '../components';

const mapById = new Map(contacts.map(item => [item.id, item]));

type DetailsScreenProps = NativeStackScreenProps<StackParamList, 'HomeScreen'>;

export function DetailsScreen({route}: DetailsScreenProps) {
  const {itemId} = route.params as {itemId: string};
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
