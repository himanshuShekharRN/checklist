import {TextStyle, ViewStyle} from 'react-native';

export interface RoundedButtonProps {
  buttonStyle?: ViewStyle;
  buttonTitleStyle?: TextStyle;
  title: string;
  onPress: () => void;
}
