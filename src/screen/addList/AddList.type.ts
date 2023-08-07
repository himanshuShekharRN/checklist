import {DepartureCheckListDataType} from '../../store/reducer/departureChecklist/type';

export type CheckListData = {
  id: number;
  dateCreated: number;
  checkListTitle: string;
  checkListsData: DepartureCheckListDataType[];
  lastItemAddedInList?: DepartureCheckListDataType | null;
};
