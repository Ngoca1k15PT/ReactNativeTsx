import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import Constant from '../../controller/Constant';
import DefaultInput from '../common/DefaultInput';
import DefaultButton from '../common/DefaultButton';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {
  StackScreenProps,
  StackNavigationProp,
} from '@react-navigation/stack';
import RootStackParamList from '../navigation/RootStackParam';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerScreenProps,
} from '@react-navigation/drawer';

type ProfileScreenNavigationProp = CompositeScreenProps<
  DrawerScreenProps<RootStackParamList>,
  StackScreenProps<RootStackParamList>
>;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {};

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#E5E5E5'}}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>WellCome</Text>
          <Image source={Constant.icon.login} style={styles.avatar} />
        </View>
        <View style={styles.container}>
          <DefaultInput
            value={email}
            setValue={setEmail}
            styleCustom={{
              marginBottom: 15,
              backgroundColor: 'white',
            }}
            placeholder="Email"
          />
          <DefaultInput
            value={password}
            setValue={setPassword}
            styleCustom={{
              marginBottom: 10,
              backgroundColor: 'white',
            }}
            placeholder="Password"
          />
        </View>
        <View style={styles.bottom}>
          <DefaultButton
            title="Login"
            styleCustom={{
              borderRadius: 20,
              backgroundColor: '#923CFF',
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 25,
  },
  avatar: {
    width: 122,
    height: 170,
  },
  textHeader: {
    fontSize: 28,
    fontFamily: Constant.fonts.poppinsBold,
    color: Constant.color.primary,
    marginBottom: 25,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 45,
  },
  bottom: {
    marginHorizontal: 40,
    marginTop: 25,
  },
});
