import React, {memo} from 'react';
import {View} from 'react-native';
import {SecondRouteProps} from './SecondRoute.type';

export const SecondRoute: React.FC<SecondRouteProps> = memo(props => {
  const {children2} = props || {};
  return <View>{children2}</View>;
});
