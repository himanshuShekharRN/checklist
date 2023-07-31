export type CheckListStackParamList = {
  Home: undefined;
  CheckList: undefined;
  AddList: undefined;
  ReviewList: {
    reviewListId: string;
  };
  ViewList: {
    listId: string;
  };
  EditList: {
    listId: string;
  };
  Completed: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends CheckListStackParamList {}
  }
}
