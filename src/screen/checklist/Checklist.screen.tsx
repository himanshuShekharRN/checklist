import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {styles} from './Checklist.style';
import {PreDepartureList} from '../../component/preDepartureList/PreDepartureList';
import {Space} from '../../component/space';

export const Checklist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text>Checklist.screens</Text>
        <Space height={38} />
        <PreDepartureList />
        <Space height={24} />
        <PreDepartureList />
      </View>
    </SafeAreaView>
  );
};
