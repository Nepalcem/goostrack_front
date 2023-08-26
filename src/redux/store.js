import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

// Редюсери
import { filterReducer } from './filter/filterSlice';
import { persistedAuthReducer } from './auth/authSlice';

//  для прибирання помилки з консолі
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

// persistor для index.js
export const persistor = persistStore(store);
