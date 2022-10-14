import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Constant from '../../controller/Constant';

const DefaultButton = ({title = '', styleCustom, styleText}) => {
  return (
    <TouchableOpacity style={[styles.button, styleCustom]}>
      <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',

    height: 46,
    justifyContent: 'center',
  },
  text: {
    fontFamily: Constant.fonts.poppinsBold,
    color: 'white',
    fontSize: 16,
  },
});
