import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Exchange from '../exchange/Exchange';
import Setting from '../setting/Setting';
import Home from '../home/Home';
import Constant from '../../controller/Constant';

type RootStackParamList = {
  Home: {
    id: string;
  };
  Detail: {
    productId: number;
  };
  Exchange: undefined;
  Setting: {userID: String};
};

const RootStack = createStackNavigator<RootStackParamList>();

<RootStack.Navigator initialRouteName={'Home'}>
  <RootStack.Screen name={'Home'} component={Home} />
</RootStack.Navigator>;
