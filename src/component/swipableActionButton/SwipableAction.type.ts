import {CheckListData} from '../../screen/addList/AddList.type';
import {IndividualCheckListDataType} from '../../store/reducer/checklist/type';

export type FirstButtonDetails = {
  fn?: (items: IndividualCheckListDataType | CheckListData) => void;
  backgroundColor?: string;
  iconName?: string;
  iconText?: string;
};

export interface SwipableActionButtonProps {
  firstButtonDetails?: FirstButtonDetails;
  secondButtonDetails?: FirstButtonDetails;
  itemDetails: IndividualCheckListDataType | CheckListData;
}
