import {TextStyle} from 'react-native';

export interface ListCardProps {
  iconName: string;
  editable?: boolean;
  readonly?: boolean;
  listTitle?: string;
  textStyle?: TextStyle;
  onChangeTextHandler?: (text: string) => void;
}
