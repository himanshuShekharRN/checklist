import React, {memo} from 'react';
import {View} from 'react-native';

export const FifthRoute = memo(props => {
  const {children5} = props || {};
  return <View>{children5}</View>;
});
