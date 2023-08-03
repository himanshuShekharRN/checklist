import {ViewStyle} from 'react-native';

export interface IconProps {
  size: number;
  name: string;
  color?: string;
  isPressable?: boolean;
  iconWrapperStyle?: ViewStyle;
  onPressHandler?: () => void;
}
