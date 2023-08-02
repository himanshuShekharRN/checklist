import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSendingDataToBE: false,
  isAddCheckListSuccess: false,
  isAddCheckListFailure: false,
  error: null,
  individualChecklistData: [],
  allCheckListData: [],
  checklistData: [],
  isFetching: false,
  isFetchingSuccess: false,
  isFetchingFailed: false,
  fetchingError: null,
};

export const checkListSlice = createSlice({
  name: 'checkListReducer',
  initialState,
  reducers: {
    addCheckListToServer: state => {
      state.isSendingDataToBE = true;
      state.isAddCheckListSuccess = false;
      state.isAddCheckListFailure = false;
      state.error = null;
      console.log('====>Hello');
    },
    checkListAddedToServerSuccess: (state, action) => {
      const {payload} = action;
      const checkList = [...state.checklistData];
      checkList.push({...payload});
      state.isSendingDataToBE = false;
      state.isAddCheckListSuccess = true;
      state.isAddCheckListFailure = false;
      state.checklistData = checkList;
      state.error = null;
    },
    checkListAddedToServerFailed: (state, action) => {
      state.isSendingDataToBE = false;
      state.isAddCheckListSuccess = false;
      state.isAddCheckListFailure = true;
      state.checklistData = [];
      state.error = action?.payload;
    },
    addTasks: (state, action) => {
      const {id, listOfTaskAdded} = action?.payload;
      console.log('🚀 ~ file: index.ts:47 ~ action?.payload:', action?.payload);
      const index = state.checklistData.findIndex(
        listData => listData.id === id,
      );
      console.log('====>AddTask', index);
      state.checklistData[index].checkListsData = [...listOfTaskAdded];
      state.checklistData[index].lastItemAddedInList =
        listOfTaskAdded[listOfTaskAdded?.length - 1];
    },
    getTasks: (state, action) => {
      const {id} = action?.payload;
      console.log('🚀 ~ file: index.ts:58 ~ id:', id);
      console.log('====>getTasks==>checklistData', state.checklistData);
      const index = state.checklistData.findIndex(
        listData => listData.id === id,
      );
      console.log("🚀 '====>getTasks ~ index:", index);
      if (index !== 1) {
        state.individualChecklistData =
          state.checklistData[index].checkListsData;
      }
      console.log(
        '====>getTasks==>individualChecklistData',
        state.individualChecklistData,
      );
    },
    resetTask: state => {
      state.individualChecklistData = [];
    },
    fetchAllChecklists: state => {
      state.isFetching = true;
      state.isFetchingSuccess = false;
      state.isFetchingFailed = false;
      state.fetchingError = null;
    },
    fetchAllChecklistsSuccess: state => {
      state.isFetching = false;
      state.isFetchingSuccess = true;
      state.isFetchingFailed = false;
      state.allCheckListData = [...state.checklistData];
      console.log('====>allCheckListData', state.allCheckListData);
      state.fetchingError = null;
    },
    fetchAllChecklistsFailure: (state, action) => {
      state.isFetching = false;
      state.isFetchingSuccess = false;
      state.isFetchingFailed = true;
      state.fetchingError = action.payload;
    },
  },
});

export const {
  addCheckListToServer,
  checkListAddedToServerSuccess,
  checkListAddedToServerFailed,
  fetchAllChecklists,
  fetchAllChecklistsSuccess,
  fetchAllChecklistsFailure,
  addTasks,
  getTasks,
  resetTask,
} = checkListSlice.actions;

export const checkListReducer = checkListSlice.reducer;
