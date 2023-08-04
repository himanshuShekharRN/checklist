import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  HeadersWithButton,
  LinearProgressBar,
  Space,
  CustomTab,
  NationalChecklist,
} from '../../component';
import {styles} from './ReviewList.style';
import {COLOR_WHITE} from '../../utils/colors';
import {useChecklistCompletionStatus} from '../../hooks';
import {
  FifthRoute,
  FirstRoute,
  FourthRoute,
  SecondRoute,
  ThirdRoute,
} from '../../component/customTab';
import {getRoutes} from '../../utils/helper';

export const ReviewList: React.FC = () => {
  const navigation = useNavigation();
  const [progressStatus] = useChecklistCompletionStatus();
  const goBack = () => {
    navigation.goBack();
  };

  const getFirstRoute = () => {
    return <FirstRoute children1={<NationalChecklist />} />;
  };

  const getSecondRoute = () => {
    return <SecondRoute />;
  };
  const getThirdRoute = () => {
    return <ThirdRoute />;
  };
  const getFourthRoute = () => {
    return <FourthRoute />;
  };
  const getFifthRoute = () => {
    return <FifthRoute />;
  };

  return (
    <SafeAreaView edges={['top']} style={styles.safeAreaView}>
      <HeadersWithButton
        containerStyle={styles.containerStyle}
        onPressBackIconHandler={goBack}
        iconContainerStyle={styles.iconContainerStyle}>
        <Text style={styles.heading}>Pre-Departure Document List</Text>
      </HeadersWithButton>
      <Space backgroundColor={COLOR_WHITE} height={20} />
      <View style={styles.progressBarContainer}>
        <Text
          style={styles.progressText}>{`${progressStatus}% completed`}</Text>
        <LinearProgressBar progressStatus={progressStatus} />
      </View>
      <Space backgroundColor={COLOR_WHITE} height={28} />
      <CustomTab
        routes={getRoutes()}
        firstRoute={getFirstRoute()}
        secondRoute={getSecondRoute()}
        thirdRoute={getThirdRoute()}
        fourthRoute={getFourthRoute()}
        fifthRoute={getFifthRoute()}
      />
    </SafeAreaView>
  );
};
