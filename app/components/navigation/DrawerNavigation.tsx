import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../home/Home';
import RootStackParamList from './RootStackParam';
import DrawerContent from '../common/DrawerContent';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'Home'}
      drawerContent={props => <DrawerContent />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen name={'Home'} component={Home} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
