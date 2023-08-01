import {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';

export interface CardProps
  extends PropsWithChildren<{
    onPressHandler?: () => void;
    isPressable: boolean;
    cardStyle?: ViewStyle;
  }> {}
