import {PersonalCheckListItem} from '../../component/departureDocCard/DepartureDocCard.type';

export type CheckListData = {
  id: number;
  dateCreated: number;
  checkListTitle: string;
  checkListsData: PersonalCheckListItem[];
  lastItemAddedInList: PersonalCheckListItem[];
};
