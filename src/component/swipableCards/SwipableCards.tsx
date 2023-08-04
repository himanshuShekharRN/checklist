import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {SwipableCardsProps} from './SwipableCards.type';

export const SwipableCards: React.FC<SwipableCardsProps> = props => {
  const {children, renderRightActions} = props;

  return (
    <Swipeable overshootRight={false} renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
};
