import {ViewStyle} from 'react-native';

export interface RoundedButtonProps {
  buttonStyle?: ViewStyle;
  buttonTitleStyle?: ViewStyle;
  title: string;
  onPress: () => void;
}
