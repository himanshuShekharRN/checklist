import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate('CheckList')}>
        <Text>Home</Text>
      </Pressable>
    </SafeAreaView>
  );
};
