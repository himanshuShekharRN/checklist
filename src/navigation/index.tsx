import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {CheckListStackNavigator} from './checkListStackNavigator';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <CheckListStackNavigator />
    </NavigationContainer>
  );
};
