import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Exchange from '../exchange/Exchange';
import Setting from '../setting/Setting';
import Home from '../home/Home';

type RootStackParamList = {
  Home: undefined;
  Exchange: undefined;
  Setting: {userID: String};
};

const RootStack = createStackNavigator<RootStackParamList>();
