import {RouteProp} from '@react-navigation/native';
import {CheckListStackParamList} from '../../navigation/type';
import {CheckListDataType, IndividualCheckListDataType} from '../../store/reducer/checklist/type';

export interface RouteParams {
  listId: number;
  listTitle: string;
}

export type ViewListRouteProps = RouteProp<CheckListStackParamList, 'ViewList'>;

export type ButtonHandlerType = {
  fn: (items: IndividualCheckListDataType | CheckListDataType) => void;
  iconName: string;
  backgroundColor: string;
  iconText: string;
};
