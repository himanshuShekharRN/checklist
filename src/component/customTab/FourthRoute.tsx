import React, {memo} from 'react';
import {View} from 'react-native';

export const FourthRoute = memo(props => {
  const {children4} = props || {};
  return <View>{children4}</View>;
});
