import {combineReducers} from '@reduxjs/toolkit';

import {checkListReducer} from './checklist';

export const appReducer = combineReducers({
  checkListReducer: checkListReducer,
});
