import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconProps} from './CustomIcon.type';
import {COLOR_BLACK} from '../../utils/colors';

export const CustomIcon: React.FC<IconProps> = props => {
  const {
    size,
    name,
    color = COLOR_BLACK,
    iconWrapperStyle,
    isPressable,
    onPressHandler,
  } = props;

  const ViewWrapper = isPressable ? Pressable : View;

  return (
    <ViewWrapper onPress={onPressHandler} style={iconWrapperStyle}>
      <Icon name={name} size={size} color={color} />
    </ViewWrapper>
  );
};
