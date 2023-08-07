import { put, takeEvery} from 'redux-saga/effects';
import {
  addCheckListToServer,
  checkListAddedToServerFailed,
  checkListAddedToServerSuccess,
} from '../../../store/reducer/checklist';
import {API_RESPONSE_SUCCESS} from '../../../utils/constant';
import { CheckListData } from '../../../screen/addList/AddList.type';

export function* handleAddCheckListToServer(action: { payload: CheckListData; }) {
  const genericMsg = 'Something went wrong';
  try {
    //mocking api calls
    const response = action?.payload;

    if (API_RESPONSE_SUCCESS) {
      yield put(checkListAddedToServerSuccess(response));
    } else {
      yield put(checkListAddedToServerFailed(genericMsg));
    }
  } catch (err) {
    yield put(checkListAddedToServerFailed(genericMsg));
  }
}

export function* watchCheckList() {
  yield takeEvery(addCheckListToServer, handleAddCheckListToServer);
}
