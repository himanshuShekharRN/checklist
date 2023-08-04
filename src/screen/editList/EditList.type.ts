import {RouteProp} from '@react-navigation/native';
import {CheckListStackParamList} from '../../navigation/type';

export interface CheckListItem {
  id: number;
  isEditable: boolean;
  isReadOnly: boolean;
  text: string;
  completed: boolean;
}

export interface RouteParams {
  listId: number;
  listTitle: string;
}

export type EditListRouteProp = RouteProp<CheckListStackParamList, 'EditList'>;
