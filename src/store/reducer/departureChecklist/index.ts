import {createSlice} from '@reduxjs/toolkit';
import {
  ACTION_REQUIRED,
  NEW,
  PENDING,
  SKIPPED,
  SUBMITTED,
} from '../../../utils/constant';
import {DATA} from '../../../utils/mockData';
import {DepartureCheckListReducer} from './type';

const initialState: DepartureCheckListReducer = {
  isFetching: false,
  isFetchingSuccess: false,
  isFetchingFailed: false,
  fetchingError: null,
  departureCheckList: DATA,
  completedDepartureCheckList: [],
};

export const departureCheckListSlice = createSlice({
  name: 'departureCheckListReducer',
  initialState,
  reducers: {
    fetchDepartureChecklist: state => {
      state.isFetching = true;
      state.isFetchingSuccess = false;
      state.isFetchingFailed = false;
      state.fetchingError = null;
    },
    departureChecklistFetchSuccess: (state, action) => {
      const {payload} = action;

      state.isFetching = false;
      state.isFetchingSuccess = true;
      state.isFetchingFailed = false;
      state.departureCheckList = payload;
      state.fetchingError = null;
    },
    departureChecklistFetchFailed: (state, action) => {
      state.isFetching = false;
      state.isFetchingSuccess = false;
      state.isFetchingFailed = true;
      state.departureCheckList = [];
      state.fetchingError = action?.payload;
    },
    checklistSubmitted: (state, action) => {
      const {items, key} = action.payload;
      const {id, documentType} = items;
      state.departureCheckList?.forEach((listData, index) => {
        if (listData.id === id) {
          state.departureCheckList[index] = {
            ...listData,
            completed: true,
            isSkipped: key === SKIPPED,
            status: documentType === ACTION_REQUIRED ? PENDING : SUBMITTED,
          };
        }
      });
    },
    checklistUnchecked: (state, action) => {
      const {id} = action.payload;

      state.departureCheckList?.forEach((listData, index) => {
        if (listData.id === id) {
          state.departureCheckList[index] = {
            ...listData,
            completed: false,
            status: NEW,
          };
        }
      });
    },
  },
});

export const {
  fetchDepartureChecklist,
  departureChecklistFetchSuccess,
  departureChecklistFetchFailed,
  checklistSubmitted,
  checklistUnchecked,
} = departureCheckListSlice.actions;

export const departureCheckListReducer = departureCheckListSlice.reducer;
