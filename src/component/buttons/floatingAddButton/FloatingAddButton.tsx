import React from 'react';
import {Pressable} from 'react-native';

import {AddIcon} from '../../../assets/icons';
import {FloatingAddButtonProps} from './FloatingAddButton.type';
import {styles} from './FloatingAddButton.style';

export const FloatingAddButton: React.FC<FloatingAddButtonProps> = props => {
  const {containerStyle, testID, onPressAddHandler} = props;

  return (
    <Pressable
      testID={testID}
      onPress={onPressAddHandler}
      style={[styles.container, containerStyle]}>
      <AddIcon testID="plusIcon" />
    </Pressable>
  );
};
