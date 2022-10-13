import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Image} from 'react-native';
import Constant from '../../controller/Constant';

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <View>
        <Text>WellCome</Text>
        <Image source={Constant.icon.login} style={styles.avatar} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: '100%',
  },
});
