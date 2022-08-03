import React from 'react';

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

export default RootStackParamList;
