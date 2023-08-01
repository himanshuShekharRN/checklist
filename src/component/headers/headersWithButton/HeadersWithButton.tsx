import React from 'react';
import {Pressable, View} from 'react-native';
import {styles} from './HeadersWithButton.style';
import {CustomIcon} from '../../customIcon';
import {HeadersWithButtonProps} from './HeadersWithButton.type';

export const HeadersWithButton: React.FC<HeadersWithButtonProps> = props => {
  const {onPressBackIconHandler, children} = props;

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressBackIconHandler} style={styles.svgContainer}>
        <CustomIcon name="chevron-left" size={40} isPressable={false} />
      </Pressable>

      {children}
    </View>
  );
};
