import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {
  AddList,
  Checklist,
  Home,
  ViewList,
  EditList,
  ReviewList,
} from '../screen';
import {CheckListStackParamList} from './type';
import {COLOR_NAVY_800_OPACITY} from '../utils/colors';

const Stack = createStackNavigator<CheckListStackParamList>();

export const CheckListStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CheckList" component={Checklist} />
      <Stack.Screen
        name="AddList"
        component={AddList}
        options={{
          presentation: 'transparentModal',
          cardStyle: {
            backgroundColor: COLOR_NAVY_800_OPACITY,
            flex: 1,
          },
        }}
      />
      <Stack.Screen name="ViewList" component={ViewList} />
      <Stack.Screen name="EditList" component={EditList} />
      <Stack.Screen name="ReviewList" component={ReviewList} />
    </Stack.Navigator>
  );
};
