import {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';

export interface HeadersWithButtonProps extends PropsWithChildren {
  onPressBackIconHandler: () => void;
  iconContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
}
