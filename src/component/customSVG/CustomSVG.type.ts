import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export interface CustomSVGProps {
  isPressable: boolean;
  svgSource: ReactNode;
  customStyle: ViewStyle;
}
