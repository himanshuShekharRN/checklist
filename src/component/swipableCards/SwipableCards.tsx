import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export const SwipableCards: React.FC = props => {
  const {children, renderRightActions} = props;

  return (
    <Swipeable overshootRight={false} renderRightActions={renderRightActions}>
      {children}
    </Swipeable>
  );
};
