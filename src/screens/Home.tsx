import * as React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Button, AppContainer} from '../components';
import {useAuthState} from '../store/userStore';
import {styled} from 'styled-components/native';
import {TypeTheme} from '../types';

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    paddingVertical: 20,
    paddingHorizontal: 0,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Third Item',
  },
  {
    id: '5',
    title: 'Third Item',
  },
  {
    id: '6',
    title: 'Third Item',
  },
  {
    id: '7',
    title: 'Third Item',
  },
  {
    id: '8',
    title: 'Third Item',
  },
  {
    id: '9',
    title: 'Third Item',
  },
  {
    id: '10',
    title: 'Third Item',
  },
];

const Item = ({title}: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export function HomeScreen() {
  const [loading, setLoading] = React.useState(false);
  const {logout, user} = useAuthState();

  const handlePress = async () => {
    setLoading(true);
    await logout();
    setLoading(false);
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
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <AppContainer>
        <Button
          text="Logout"
          loading={loading}
          onPress={handlePress}
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
