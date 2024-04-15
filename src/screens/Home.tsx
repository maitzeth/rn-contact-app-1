import * as React from 'react';
import {FlatList} from 'react-native';
import {Button, AppContainer, ContactItem} from '../components';
import {useAuthState} from '../store/userStore';
import {styled} from 'styled-components/native';
import {TypeTheme, StackParamList} from '../types';
import {useNavigation} from '@react-navigation/native';
import contacts from '../data.json';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomeScreenNavigationProps = NativeStackNavigationProp<
  StackParamList,
  'Home'
>;

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const [loading, setLoading] = React.useState(false);
  const {logout, user} = useAuthState();

  const handleLogout = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
  };

  const handlePress = (id: string) => {
    navigation.navigate('Details', {
      itemId: id,
    });
  };

  return (
    <>
      <AppContainer>
        <Inner>
          <StyledHeader>
            <StyledTitle>Welcome back</StyledTitle>
            <StyledSubtitle>{user?.firstName}...</StyledSubtitle>
          </StyledHeader>
        </Inner>
      </AppContainer>
      <FlatList
        data={contacts}
        renderItem={({item}) => {
          return (
            <ContactItem
              name={item.name}
              phone={item.phone}
              handlePress={() => handlePress(item.id)}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
      <AppContainer>
        <Button
          text="Logout"
          loading={loading}
          onPress={handleLogout}
          disabled={loading}
        />
      </AppContainer>
    </>
  );
}

const StyledHeader = styled.View<TypeTheme>`
  display: flex;
`;

const Inner = styled.View<TypeTheme>`
  padding-top: ${props => props.theme.dimensions.vh(5)};
  padding-bottom: ${props => props.theme.dimensions.vh(5)};
`;

const StyledTitle = styled.Text<TypeTheme>`
  font-size: ${props => props.theme.units.rem(2)};
  font-weight: bold;
  color: ${props => props.theme.colors.black};
`;

const StyledSubtitle = styled.Text<TypeTheme>`
  font-size: ${props => props.theme.units.rem(1)};
  color: ${props => props.theme.colors.black};
`;
