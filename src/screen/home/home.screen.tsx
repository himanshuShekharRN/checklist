import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text} from 'react-native';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('CheckList')}>
      <Text>Home</Text>
    </Pressable>
  );
};
