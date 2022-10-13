import React from 'react';
import DrawerNavigator from './DrawerNavigation';
import Login from '../Auth/Login';

type RootStackParamList = {
  TabBarNavigation: undefined;
  Home: undefined;
  Exchange: {
    id?: string | undefined;
  };
  Setting: {userID: String};
  DrawerNavigator: undefined;
  Login: undefined;
  Register: undefined;
};

export default RootStackParamList;
