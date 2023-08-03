import React, {memo} from 'react';
import {View} from 'react-native';

export const FirstRoute = memo(props => {
  const {children1} = props || {};
  return <View>{children1}</View>;
});
