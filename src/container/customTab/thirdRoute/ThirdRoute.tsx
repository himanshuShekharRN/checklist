import React, {memo} from 'react';
import {View} from 'react-native';
import {ThirdRouteProps} from './ThirdRoute.type';

export const ThirdRoute: React.FC<ThirdRouteProps> = memo(props => {
  const {children3, testID} = props || {};
  return <View testID={testID}>{children3}</View>;
});
