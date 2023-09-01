import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


axios.defaults.baseURL = 'https://goostrack-backend.onrender.com';

//Authorization заголовок
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//registration
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      token.set(data.token);
      Notify.success(`Welcome!`);
      return data;
    } catch (error) {
      Notify.failure(`Registration failed. Try again`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//Log-In
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/login', credentials);
    token.set(data.token);
    Notify.success(`Welcome!`);
    return data;
  } catch (error) {
    Notify.failure(`Login failed. Try again`);
  }
});

//Log-Out
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/auth/logout');
    token.unset();
  } catch (error) {}
});

//Fetch current User
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // console.log('thunkApi.getState()', thunkAPI.getState());
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      // if (persistedToken === null || persistedToken === '') {
      // console.log('There is no persistedToken');
      return thunkAPI.rejectWithValue('Oops');
      // return state;
    }
    token.set(persistedToken);
    try {
      // console.log('persistedToken', persistedToken);
      const { data } = await axios.get('/users/current');
      // console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const patchCurrentUser = createAsyncThunk(
  'auth/patch',
  async (userData, thunkAPI) => {
    // console.log('thunkApi.getState()', thunkAPI.getState());
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // const user = state.auth.user;
    console.log(userData);
    if (!persistedToken) {
      // if (persistedToken === null || persistedToken === '') {
      // console.log('There is no persistedToken');
      return thunkAPI.rejectWithValue('Oops');
      // return state;
    }
    token.set(persistedToken);
    try {
      // console.log('persistedToken', persistedToken);
      const response = await axios.patch('/users/edit', userData);
      // console.log('data', data);
        return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  patchCurrentUser,
};
export default authOperations;
