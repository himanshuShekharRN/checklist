import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {styles} from './Checklist.style';
import {
  PreDepartureList,
  Space,
  MyCheckList,
  FloatingAddButton,
} from '../../component';
import {useNavigation} from '@react-navigation/native';

export const Checklist = () => {
  const navigation = useNavigation();

  const onPressAddHandler = (): void => {
    navigation.navigate('AddList');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        bounces={false}>
        <View style={styles.subContainer}>
          <Text>Checklist.screens</Text>
          <Space height={38} />
          <PreDepartureList />
          <Space height={24} />
          <MyCheckList />
        </View>
      </ScrollView>
      <FloatingAddButton onPressAddHandler={onPressAddHandler} />
    </SafeAreaView>
  );
};
