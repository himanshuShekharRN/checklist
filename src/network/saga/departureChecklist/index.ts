import { put, takeEvery} from 'redux-saga/effects';

import {API_RESPONSE_SUCCESS} from '../../../utils/constant';
import {DATA} from '../../../utils/mockData';
import {
  departureChecklistFetchFailed,
  departureChecklistFetchSuccess,
  fetchDepartureChecklist,
} from '../../../store/reducer/departureChecklist';

export function* handleFetchDepartureCheckList() {
  const genericMsg = 'Something went wrong';
  try {
    //mocking api calls
    const response = DATA;
    if (API_RESPONSE_SUCCESS) {
      yield put(departureChecklistFetchSuccess(response));
    } else {
      yield put(departureChecklistFetchFailed(genericMsg));
    }
  } catch (err) {
    yield put(departureChecklistFetchFailed(genericMsg));
  }
}

export function* watchDepartureCheckList() {
  yield takeEvery(fetchDepartureChecklist, handleFetchDepartureCheckList);
}
