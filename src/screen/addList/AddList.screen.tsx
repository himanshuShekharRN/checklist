import React from 'react';
import {Pressable, Text} from 'react-native';

export const AddList = () => {
  const onPressAddHandler = (): void => {
    console.log('Add');
  };

  return (
    <Pressable onPress={onPressAddHandler}>
      <Text>Add List</Text>
    </Pressable>
  );
};
