import React, {useCallback} from 'react';
import {Text, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useNavigation} from '@react-navigation/native';

import {Card, Title, Space, CustomIcon} from '../';
import {
  COLOR_BLACK,
  COLOR_GREY_600,
  COLOR_MARLOW_BLUE,
  COLOR_WHITE,
} from '../../utils/colors';
import {styles} from './PreDepartureList.style';
import {RIGHT_ANGLE_BRACKET} from '../../utils/iconsName';
import {useChecklistCompletionStatus} from '../../hooks';

export const PreDepartureList: React.FC = () => {
  const navigation = useNavigation();
  const [progressStatus] = useChecklistCompletionStatus();
  const onPressHandler = useCallback(
    () => navigation.navigate('ReviewList'),
    [navigation],
  );

  return (
    <>
      <Title
        title="Pre-Departure Documents List"
        subTitle="List of all required documents for your upcoming assignment"
      />
      <Space height={12} />
      <Card isPressable onPressHandler={onPressHandler}>
        <View style={styles.cardSubContainer}>
          <View style={styles.indicatorContainer}>
            <CircularProgress
              value={progressStatus}
              radius={25}
              inActiveStrokeColor={COLOR_WHITE}
              activeStrokeColor={COLOR_MARLOW_BLUE}
              progressValueColor={COLOR_BLACK}
              valueSuffix={'%'}
              titleColor={COLOR_BLACK}
              titleStyle={styles.titleStyle}
            />
            <Text style={styles.textStyle}>Review List</Text>
          </View>
          <CustomIcon
            name={RIGHT_ANGLE_BRACKET}
            size={14}
            isPressable={false}
            color={COLOR_GREY_600}
          />
        </View>
      </Card>
    </>
  );
};
