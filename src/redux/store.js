import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

// Редюсери
import { persistedAuthReducer } from './auth/authSlice';
import { reviewsReducer } from './reviews/reviewsSlice';
import { titleReducer } from './title/titleSlice';
import { tasksReducer } from './tasks/tasksSlice';

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
    title: titleReducer,
    reviews: reviewsReducer,
    tasks: tasksReducer,
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
