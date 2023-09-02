// імпорт бібліотеки створення слайсу
import { createSlice } from '@reduxjs/toolkit';

// імпортуємо нащі операції запиту з сервера
import authOperations from './authOperations';

//storage і persistReducer для прогонки через мідлвер персістор для синхронізації із localStorage
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// початковий стан
const initialState = {
  user: { username: '', email: '' },
  token: null,
  isLoggedIn: false,
};

// слайс автентифікації
// редʼюсери за новим синтаксисом білдера і старим синтаксисом (закоментовано)
const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // новий синтаксис через builder

      //Log-In
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //Log-Out
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      //set Current User
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      // PATCH Current User
      .addCase(authOperations.patchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

// редʼюсер
const authReducer = authSlise.reducer;

// налаштування персіста
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// проганяємо редʼюс через персіст (мідлвер для синхронізації з докалсторедж)
export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
