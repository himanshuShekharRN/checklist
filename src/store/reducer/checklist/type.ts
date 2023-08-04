export type IndividualCheckListDataType = {
  completed: boolean;
  id: number;
  isEditable: boolean;
  isReadOnly: boolean;
  text: string;
};

export type CheckListDataType = {
  id: number;
  dateCreated: number;
  checkListTitle: string;
  checkListsData: IndividualCheckListDataType[];
  lastItemAddedInList: IndividualCheckListDataType[];
};

export interface ChecklistReducer {
  isSendingDataToBE: boolean;
  isAddCheckListSuccess: boolean;
  isAddCheckListFailure: boolean;
  error: string | null;
  individualChecklistData: IndividualCheckListDataType[];
  allCheckListData: CheckListDataType[];
  checklistData: CheckListDataType[];
  isFetching: boolean;
  isFetchingSuccess: boolean;
  isFetchingFailed: boolean;
  fetchingError: string | null;
}
