import React from 'react';
import DrawerNavigator from './DrawerNavigation';

type RootStackParamList = {
  TabBarNavigation: undefined;
  Home: undefined;
  Exchange: {
    id?: string | undefined;
  };
  Setting: {userID: String};
  DrawerNavigator: undefined;
};

export default RootStackParamList;
