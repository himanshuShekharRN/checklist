import React from 'react';
import {Pressable, View} from 'react-native';

import {CardProps} from './Card.type';
import {styles} from './Card.style';

export const Card: React.FC<CardProps> = props => {
  const {children, onPressHandler, isPressable, cardStyle} = props;

  const ViewWrapper = isPressable ? Pressable : View;

  return (
    <ViewWrapper onPress={onPressHandler} style={[styles.container, cardStyle]}>
      {children}
    </ViewWrapper>
  );
};
