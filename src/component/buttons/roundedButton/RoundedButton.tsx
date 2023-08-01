import React from 'react';
import {RoundedButtonProps} from './RoundedButton.type';
import {Pressable, Text} from 'react-native';
import {styles} from './RoundedButton.style';

export const RoundedButton: React.FC<RoundedButtonProps> = props => {
  const {title, onPress, buttonStyle, buttonTitleStyle} = props;

  return (
    <Pressable onPress={onPress} style={[styles.container, buttonStyle]}>
      <Text style={[styles.buttonText, buttonTitleStyle]}>{title}</Text>
    </Pressable>
  );
};
