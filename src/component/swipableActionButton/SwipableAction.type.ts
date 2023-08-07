import {CheckListDataType, IndividualCheckListDataType} from '../../store/reducer/checklist/type';

export type FirstButtonDetails = {
  fn?: (items: IndividualCheckListDataType | CheckListDataType) => void;
  backgroundColor?: string;
  iconName?: string;
  iconText?: string;
};

export interface SwipableActionButtonProps {
  firstButtonDetails?: FirstButtonDetails;
  secondButtonDetails?: FirstButtonDetails;
  itemDetails: IndividualCheckListDataType | CheckListDataType;
}
