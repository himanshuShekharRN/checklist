import React from 'react';
import {Pressable} from 'react-native';

import {CardProps} from './Card.type';
import {styles} from './Card.style';

export const Card: React.FC<CardProps> = props => {
  const {children, onPressHandler} = props;

  return (
    <Pressable onPress={onPressHandler} style={styles.container}>
      {children}
    </Pressable>
  );
};
