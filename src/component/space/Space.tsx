import React from 'react';
import {View} from 'react-native';

import {SpaceProps} from './Space.type';

export const Space: React.FC<SpaceProps> = props => {
  const {height, width, backgroundColor} = props;
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
      }}
    />
  );
};
