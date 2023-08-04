import React, {memo} from 'react';
import {View} from 'react-native';
import {FourthRouteProps} from './FourthRoute.type';

export const FourthRoute: React.FC<FourthRouteProps> = memo(props => {
  const {children4} = props || {};
  return <View>{children4}</View>;
});
