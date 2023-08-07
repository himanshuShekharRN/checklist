import React, {memo} from 'react';
import {View} from 'react-native';
import {SecondRouteProps} from './SecondRoute.type';

export const SecondRoute: React.FC<SecondRouteProps> = memo(props => {
  const {children2, testID} = props || {};
  return <View testID={testID}>{children2}</View>;
});
