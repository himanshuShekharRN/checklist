import {delay, put, takeEvery} from 'redux-saga/effects';
import {
  addCheckListToServer,
  checkListAddedToServerFailed,
  checkListAddedToServerSuccess,
  fetchAllChecklists,
  fetchAllChecklistsFailure,
  fetchAllChecklistsSuccess,
} from '../../../store/reducer/checklist';
import {API_RESPONSE_SUCCESS} from '../../../utils/constant';

export function* handleAddCheckListToServer(action) {
  let genericMsg = 'Something went wrong';
  try {
    //mocking api calls
    const response = action?.payload;

    if (API_RESPONSE_SUCCESS) {
      delay(500);
      yield put(checkListAddedToServerSuccess(response));
    } else {
      yield put(checkListAddedToServerFailed(genericMsg));
    }
  } catch (err) {
    yield put(checkListAddedToServerFailed(genericMsg));
  }
}

export function* handleFetchAllCheckLists(action) {
  let genericMsg = 'Something went wrong';
  try {
    //mocking api calls
    const response = action?.payload;
    if (API_RESPONSE_SUCCESS) {
      yield put(fetchAllChecklistsSuccess(response));
    } else {
      yield put(fetchAllChecklistsFailure(genericMsg));
    }
  } catch (err) {
    yield put(fetchAllChecklistsFailure(genericMsg));
  }
}

export function* watchCheckList() {
  yield takeEvery(addCheckListToServer, handleAddCheckListToServer);
  yield takeEvery(fetchAllChecklists, handleFetchAllCheckLists);
}
