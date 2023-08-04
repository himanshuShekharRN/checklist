import {combineReducers} from '@reduxjs/toolkit';

import {checkListReducer} from './checklist';
import {departureCheckListReducer} from './departureChecklist';

export const appReducer = combineReducers({
  checkListReducer: checkListReducer,
  departureCheckListReducer: departureCheckListReducer,
});
