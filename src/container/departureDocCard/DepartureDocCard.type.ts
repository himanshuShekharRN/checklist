export type PersonalCheckListItem = {
  documentName: string;
  nationality: string;
  docNumber: number;
  issueDate: string;
  expiryDate: string;
  documentType: string;
  status: string;
  completed: boolean;
  isSkipped: boolean;
};
export interface DepartureDocCardProps {
  listData: PersonalCheckListItem;
  disabledTextColor?: string;
}
