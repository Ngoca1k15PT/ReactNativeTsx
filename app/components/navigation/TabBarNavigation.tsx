import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Exchange from '../exchange/Exchange';
import Setting from '../setting/Setting';
import Home from '../home/Home';
import RootStackParamList from './RootStackParam';

const RootStack = createBottomTabNavigator<RootStackParamList>();

const TabBarCustom = () => {};

const TabBarNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={'Home'} component={Home} />
      <RootStack.Screen name={'Exchange'} component={Exchange} />
      <RootStack.Screen name={'Setting'} component={Setting} />
    </RootStack.Navigator>
  );
};

export default TabBarNavigation;
