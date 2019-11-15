/* eslint no-console: 0 */

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducers from 'startup/redux/reducers';

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['app'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

window.printStore = () => {
  console.log(store.getState());
};

export default store;
