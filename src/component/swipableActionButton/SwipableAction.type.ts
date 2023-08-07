import {
  CheckListDataType,
  IndividualCheckListDataType,
} from '../../store/reducer/checklist/type';
import {DepartureCheckListDataType} from '../../store/reducer/departureChecklist/type';

export type FirstButtonDetails = {
  fn?: (
    items:
      | IndividualCheckListDataType
      | CheckListDataType
      | DepartureCheckListDataType,
  ) => void;
  backgroundColor?: string;
  iconName?: string;
  iconText?: string;
};

export interface SwipableActionButtonProps {
  firstButtonDetails?: FirstButtonDetails;
  secondButtonDetails?: FirstButtonDetails;
  itemDetails:
    | IndividualCheckListDataType
    | CheckListDataType
    | DepartureCheckListDataType;
}
