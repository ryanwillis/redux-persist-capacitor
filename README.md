# redux-persist-capacitor
Storage adapter to use [Capacitor Storage](https://capacitorjs.com/docs/apis/storage) with [redux-persist](https://github.com/rt2zz/redux-persist).

## Installation
```bash
npm install --save redux-persist-capacitor
```

## Usage
CapacitorStorage can be used as a drop-in replacement for any redux-persist storage adapter.
```javascript
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import CapacitorStorage from 'redux-persist-capacitor-storage';

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage: CapacitorStorage, // default export is already instantiated
  stateReconciler: autoMergeLevel1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
```
Here's a recent example using multiple [@reduxjs/toolkit](https://redux-toolkit.js.org/) `slices` and `configureStore`.
```javascript
import { configureStore, createSlice, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistCombineReducers, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import CapacitorStorage from 'redux-persist-capacitor-storage';

const persistConfig = {
  key: 'root',
  storage: CapacitorStorage,
  stateReconciler: autoMergeLevel1,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {user: null},
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

const appSlice = createSlice({
  name: 'app',
  initialState: {isLoading: false},
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    }
  }
});

const _persistedReducer = persistCombineReducers( persistConfig, {
  auth: authSlice.reducer,
  app: appSlice.reducer
});

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});

export const persistor = persistStore(store);
```
