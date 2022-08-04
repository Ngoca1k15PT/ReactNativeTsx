import React from 'react';

type RootStackParamList = {
  TabBarNavigation: undefined;
  Home: undefined;
  Exchange: {
    id?: string | undefined;
  };
  Setting: {userID: String};
};

export default RootStackParamList;
