import React, {memo} from 'react';
import {View} from 'react-native';
import {FirstRouteProps} from './FirstRoute.type';

export const FirstRoute: React.FC<FirstRouteProps> = memo(props => {
  const {children1} = props || {};
  return <View>{children1}</View>;
});
