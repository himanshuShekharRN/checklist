import {UNCHECKED} from './../../../utils/constant';
import {createSlice} from '@reduxjs/toolkit';
import {ChecklistReducer} from './type';

const initialState: ChecklistReducer = {
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
      const {id, listOfTaskAdded} = action.payload;

      const index = state.checklistData.findIndex(
        listData => listData.id === id,
      );

      state.checklistData[index].checkListsData = [...listOfTaskAdded];
      state.checklistData[index].lastItemAddedInList =
        listOfTaskAdded[listOfTaskAdded?.length - 1];
    },
    getTasks: (state, action) => {
      const {id} = action.payload;
      const index = state.checklistData.findIndex(
        listData => listData.id === id,
      );

      if (index !== -1) {
        state.individualChecklistData =
          state.checklistData[index].checkListsData;
      }
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
      state.fetchingError = null;
    },
    fetchAllChecklistsFailure: (state, action) => {
      state.isFetching = false;
      state.isFetchingSuccess = false;
      state.isFetchingFailed = true;
      state.fetchingError = action.payload;
    },
    deleteChecklist: (state, action) => {
      const {id} = action.payload;
      const index = state.checklistData?.findIndex(data => data.id === id);
      state.checklistData.splice(index, 1);
    },
    deleteIndividualChecklist: (state, action) => {
      const {items, listId} = action.payload;
      const {id} = items;

      const index = state.individualChecklistData?.findIndex(
        data => data.id === id,
      );
      const parentIndex = state.checklistData?.findIndex(
        data => data?.id === listId,
      );

      state.individualChecklistData.splice(index, 1);

      state.checklistData[parentIndex].checkListsData =
        state.individualChecklistData;

      state.checklistData[parentIndex].lastItemAddedInList =
        state.individualChecklistData[
          state.individualChecklistData?.length - 1
        ];
    },
    updateTaskStatus: (state, action) => {
      const {items, listId, key} = action.payload;
      const {id} = items;

      const parentIndex = state.checklistData?.findIndex(
        data => data?.id === listId,
      );
      state.individualChecklistData.forEach((data, index) => {
        if (data.id === id) {
          state.individualChecklistData[index] = {
            ...state.individualChecklistData[index],
            completed: key === UNCHECKED ? false : true,
          };
        }
      });

      state.individualChecklistData = [...state.individualChecklistData];
      state.checklistData[parentIndex].checkListsData =
        state.individualChecklistData;
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
  deleteChecklist,
  deleteIndividualChecklist,
  updateTaskStatus,
} = checkListSlice.actions;

export const checkListReducer = checkListSlice.reducer;
