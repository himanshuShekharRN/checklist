import React, {memo} from 'react';
import {View} from 'react-native';
import {FifthRouteProps} from './FifthRoute.type';

export const FifthRoute: React.FC<FifthRouteProps> = memo(props => {
  const {children5} = props || {};
  return <View>{children5}</View>;
});
