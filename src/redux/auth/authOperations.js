import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://goostrack-backend.onrender.com';
// axios.defaults.baseURL = 'http://localhost:8000';

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
      Notify.success(`Registration is successful!Welcome to GooseTrack!`);
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
    Notify.success(`Successful!Welcome to GooseTrack!`);
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

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
    
      return thunkAPI.rejectWithValue('Oops');
      // return state;
    }
    token.set(persistedToken);
    try {
      
      const { data } = await axios.get('/users/current');
    
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const patchCurrentUser = createAsyncThunk(
  'auth/patch',
  async (userData, thunkAPI) => {

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
     
      return thunkAPI.rejectWithValue('Oops');
    
    }
    token.set(persistedToken);
    try {
     
      const response = await axios.patch('/users/edit', userData);
      Notify.success(`The information is redacted!`);
      return response.data;
    } catch (error) {
      Notify.failure(`Error! Try again!`);
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
