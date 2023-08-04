export type DepartureCheckListDataType = {
  id: number;
  documentName: string;
  nationality: string;
  docNumber: string;
  issueDate: string;
  expiryDate: string;
  documentType: string;
  isSkipped: boolean;
  status: string;
  completed: boolean;
};

export interface DepartureCheckListReducer {
  isFetching: boolean;
  isFetchingSuccess: boolean;
  isFetchingFailed: boolean;
  fetchingError: string | null;
  departureCheckList: DepartureCheckListDataType[];
  completedDepartureCheckList: DepartureCheckListDataType[];
}
