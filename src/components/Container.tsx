import * as React from 'react';
import {View, StyleSheet} from 'react-native';

export const AppContainer = ({children}: React.PropsWithChildren) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
});
