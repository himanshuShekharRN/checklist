import React, {memo} from 'react';
import {View} from 'react-native';
import {ThirdRouteProps} from './ThirdRoute.type';

export const ThirdRoute: React.FC<ThirdRouteProps> = memo(props => {
  const {children3} = props || {};
  return <View>{children3}</View>;
});
