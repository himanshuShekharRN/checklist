import {ViewStyle} from 'react-native';

export interface FloatingAddButtonProps {
  containerStyle?: ViewStyle;
  testID?: string;
  onPressAddHandler: () => void;
}
