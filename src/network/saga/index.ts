import {all} from 'redux-saga/effects';
import {watchCheckList} from './checkList';
import {watchDepartureCheckList} from './departureChecklist';

export const rootSaga = function* () {
  yield all([watchCheckList(), watchDepartureCheckList()]);
};
