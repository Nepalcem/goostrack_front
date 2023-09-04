// імпортуємо бібліотеку createSlice
import { createSlice } from '@reduxjs/toolkit';

//  створюємо Slice для filter
// початковий стан ''
// ред'юсер з перезаписом фільтра
export const titleSlice = createSlice({
  name: 'title',
  initialState: '1',
  reducers: {
    editTitle(state, action) {
      return action.payload;
    },
  },
});

//  експорти наших екшенів для використання в компонентах
export const { editTitle } = titleSlice.actions;

//  експорт редюскра
export const titleReducer = titleSlice.reducer;
