import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {appReducer} from './reducer';
import {rootSaga} from '../network/saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['checkListReducer', 'departureCheckListReducer'],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
