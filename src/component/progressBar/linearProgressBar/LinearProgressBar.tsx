import React from 'react';
import {View} from 'react-native';
import {LinearProgressBarProps} from './LinearProgressBar.type';
import {styles} from './LinearProgressBar.style';
import LinearGradient from 'react-native-linear-gradient';
import {
  COLOR_MARLOW_BLUE,
  COLOR_MARLOW_BLUE_GRAD_1,
  COLOR_MARLOW_BLUE_GRAD_2,
} from '../../../utils/colors';

export const LinearProgressBar: React.FC<LinearProgressBarProps> = props => {
  const {progressStatus} = props;
  return (
    <View testID="linearProgressBar" style={styles.container}>
      <View style={[styles.gradientContainer, {width: `${progressStatus}%`}]}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[
            COLOR_MARLOW_BLUE,
            COLOR_MARLOW_BLUE_GRAD_1,
            COLOR_MARLOW_BLUE_GRAD_2,
          ]}
          style={styles.linearGradient}
        />
      </View>
      <View style={styles.view} />
    </View>
  );
};
