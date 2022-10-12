import {  configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import feedbackForm from './feedbackForm/feedback-slice';

const persistConfig = {
  key: 'feedbackForm',
  storage,
};

const persistedReducer = persistReducer(persistConfig, feedbackForm)

export const store = configureStore({
    reducer: {
      feedbackForm: persistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions:[FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    }),
});

export const persistor = persistStore(store);