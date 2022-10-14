import React from 'react';
import {View, TextInput, StyleSheet, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  styleCustom: {};
  // setValue: string;
  // value: string;
}

const DefaultInput = ({value, setValue, styleCustom, placeholder}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChange={text => setValue(text)}
        style={[styles.input, styleCustom]}
      />
    </View>
  );
};

export default DefaultInput;

const styles = StyleSheet.create({
  input: {
    height: 46,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
