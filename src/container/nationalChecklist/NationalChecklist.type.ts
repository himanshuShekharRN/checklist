export interface NationalChecklistProps {
  testID?: string;
}

export type DepartureChecklistType = {
  id: number,
    documentName: string,
    nationality: string,
    docNumber: string,
    issueDate: string,
    expiryDate: string,
    documentType:string,
    isSkipped: boolean,
    status: string,
    completed: boolean,
}