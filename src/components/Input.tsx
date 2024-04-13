import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

export const Input = ({control, name, placeholder, secureTextEntry}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange, onBlur}}) => {
        return (
          <>
            <View style={styles.container}>
              <TextInput
                value={value}
                onChangeText={textVal => onChange(textVal)}
                onBlur={onBlur}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
              />
            </View>
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {},
});
