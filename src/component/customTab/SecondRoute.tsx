import React, {memo} from 'react';
import {View} from 'react-native';

export const SecondRoute = memo(props => {
  const {children2} = props || {};
  return <View>{children2}</View>;
});
