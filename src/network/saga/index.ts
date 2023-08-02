import {all} from 'redux-saga/effects';
import {watchCheckList} from './checkList';

export const rootSaga = function* () {
  yield all([watchCheckList()]);
};
