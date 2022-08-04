import React from 'react';
import TabBarNavigation from './TabBarNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackParamList from './RootStackParam';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={'TabBarNavigation'}
            component={TabBarNavigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
