import React from 'react';
import {View, Pressable, Text} from 'react-native';

import {styles} from './SwipableActionButton.style';
import {isNonEmptyObject} from './../../utils/helper';
import {COLOR_WHITE} from './../../utils/colors';
import {CustomIcon} from './../customIcon/CustomIcon';
import {SwipableActionButtonProps} from './SwipableAction.type';

export const SwipableActionButton: React.FC<
  SwipableActionButtonProps
> = props => {
  const {
    firstButtonDetails = {},
    secondButtonDetails = {},
    itemDetails,
  } = props;

  return (
    <View style={styles.container}>
      {isNonEmptyObject(firstButtonDetails) && (
        <Pressable
          onPress={() =>
            firstButtonDetails?.fn && firstButtonDetails.fn(itemDetails)
          }
          style={[
            styles.firstContainer,
            {backgroundColor: firstButtonDetails.backgroundColor},
          ]}>
          <CustomIcon
            name={firstButtonDetails.iconName}
            color={COLOR_WHITE}
            size={24}
          />
          <Text style={styles.textStyle}>{firstButtonDetails.iconText}</Text>
        </Pressable>
      )}

      {isNonEmptyObject(secondButtonDetails) && (
        <Pressable
          onPress={() =>
            secondButtonDetails?.fn && secondButtonDetails.fn(itemDetails)
          }
          style={[
            styles.firstContainer,
            {backgroundColor: secondButtonDetails.backgroundColor},
          ]}>
          <CustomIcon
            name={secondButtonDetails.iconName}
            color={COLOR_WHITE}
            size={24}
          />
          <Text style={styles.textStyle}>{secondButtonDetails.iconText}</Text>
        </Pressable>
      )}
    </View>
  );
};
