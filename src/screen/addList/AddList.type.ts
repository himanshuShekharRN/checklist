import {PersonalCheckListItem} from '../../container/departureDocCard/DepartureDocCard.type';

export type CheckListData = {
  id: number;
  dateCreated: number;
  checkListTitle: string;
  checkListsData: PersonalCheckListItem[];
  lastItemAddedInList: PersonalCheckListItem[];
};
