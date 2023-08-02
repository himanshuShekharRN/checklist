import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {styles} from './Checklist.style';
import {
  PreDepartureList,
  Space,
  MyCheckList,
  FloatingAddButton,
  HeadersWithButton,
} from '../../component';
import {useNavigation} from '@react-navigation/native';

export const Checklist = () => {
  const navigation = useNavigation();

  const onPressAddHandler = (): void => {
    navigation.navigate('AddList');
  };
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeadersWithButton
        containerStyle={styles.containerStyle}
        onPressBackIconHandler={goBack}
        iconContainerStyle={styles.iconContainerStyle}>
        <Text style={styles.heading}>Checklists</Text>
      </HeadersWithButton>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        contentContainerStyle={styles.contentContainerStyle}
        bounces={false}>
        <View style={styles.subContainer}>
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
