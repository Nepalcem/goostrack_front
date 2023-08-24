import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});
