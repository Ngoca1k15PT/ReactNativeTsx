import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Exchange from '../exchange/Exchange';
import Setting from '../setting/Setting';
import Home from '../home/Home';
import RootStackParamList from './RootStackParam';

const RootStack = createStackNavigator<RootStackParamList>();

<RootStack.Navigator initialRouteName={'Home'}>
  <RootStack.Screen name={'Home'} component={Home} />
  <RootStack.Screen name={'Exchange'} component={Exchange} />
  <RootStack.Screen name={'Setting'} component={Setting} />
</RootStack.Navigator>;
