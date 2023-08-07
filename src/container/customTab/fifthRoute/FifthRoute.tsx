import React, {memo} from 'react';
import {View} from 'react-native';
import {FifthRouteProps} from './FifthRoute.type';

export const FifthRoute: React.FC<FifthRouteProps> = memo(props => {
  const {children5, testID} = props || {};
  return <View testID={testID}>{children5}</View>;
});
