import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import Constant from '../../controller/Constant';

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>WellCome</Text>
        <Image source={Constant.icon.login} style={styles.avatar} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 122,
    height: 170,
  },
  textHeader: {
    fontSize: 28,
    fontFamily: Constant.fonts.poppinsBold,
    color: Constant.color.primary,
  },
});
