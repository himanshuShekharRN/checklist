import React from 'react';
import {Pressable, Text} from 'react-native';

export const ViewList = () => {
  const onPressAddHandler = (): void => {
    console.log('Add');
  };

  return (
    <Pressable onPress={onPressAddHandler}>
      <Text>View List</Text>
    </Pressable>
  );
};
