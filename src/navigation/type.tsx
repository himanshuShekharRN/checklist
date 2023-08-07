export type CheckListStackParamList = {
  Home: undefined;
  CheckList: undefined;
  AddList: undefined;
  ReviewList: undefined;
  ViewList: {
    listId: number;
    listTitle: string;
  };
  EditList: {
    listId: number;
    listTitle: string;
  };
  Completed: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends CheckListStackParamList {}
  }
}
