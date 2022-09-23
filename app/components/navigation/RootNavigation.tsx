import React from 'react';
import TabBarNavigation from './TabBarNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackParamList from './RootStackParam';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigator from './DrawerNavigation';
import Exchange from '../exchange/Exchange';
import Setting from '../setting/Setting';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'DrawerNavigator'}>
          <Stack.Screen name={'DrawerNavigator'} component={DrawerNavigator} />
          {/* <Stack.Screen
            name={'TabBarNavigation'}
            component={TabBarNavigation}
          /> */}
          <Stack.Screen name={'Exchange'} component={Exchange} />
          <Stack.Screen name={'Setting'} component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
