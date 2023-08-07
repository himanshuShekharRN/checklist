import React from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './HeadersWithButton.style';
import {CustomIcon} from '../../customIcon';
import {HeadersWithButtonProps} from './HeadersWithButton.type';

export const HeadersWithButton: React.FC<HeadersWithButtonProps> = props => {
  const {
    onPressBackIconHandler,
    children,
    iconContainerStyle,
    containerStyle,
    testID,
  } = props;

  return (
    <View testID="headersWithButton" style={[styles.container, containerStyle]}>
      <Pressable
        testID={testID}
        onPress={onPressBackIconHandler}
        style={[styles.iconContainer, iconContainerStyle]}>
        <CustomIcon name="chevron-left" size={40} isPressable={false} />
      </Pressable>

      {children}
    </View>
  );
};
