import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const DefaultInput = ({value, setValue}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChange={text => setValue(text)}
        style={styles.input}
      />
    </View>
  );
};

export default DefaultInput;

const styles = StyleSheet.create({
  input: {},
});
