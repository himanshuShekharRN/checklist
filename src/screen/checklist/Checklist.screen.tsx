import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {styles} from './Checklist.style';
import {Space, FloatingAddButton, HeadersWithButton} from '../../component';
import {useNavigation} from '@react-navigation/native';
import {MyCheckList, PreDepartureList} from '../../container';

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
      <FloatingAddButton
        testID="floatingBtn"
        onPressAddHandler={onPressAddHandler}
      />
    </SafeAreaView>
  );
};
