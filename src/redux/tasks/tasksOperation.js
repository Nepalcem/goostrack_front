import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goostrack-backend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchAllTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Oops');
    }
    token.set(persistedToken);
    try {

      const response = await axios.get(`/tasks`);
      return response.data.tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTasksByDate = createAsyncThunk(
  'tasks/fetchByDate',
  async ({ year, month, day }, thunkAPI) => {

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Oops');
    }
    token.set(persistedToken);
    try {

      const response = await axios.get(`/tasks?year=${year}&month=${month}&day=${day}`);
      return response.data.tasks;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



export const addTask = createAsyncThunk(
  'tasks/add',
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.post('/tasks', task);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/update',
  async ({ id, updatedTask }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/tasks/${id}`, updatedTask);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/tasks/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tasksOperations = {
  fetchAllTasks,
  fetchTasksByDate,
  addTask,
  updateTask,
  deleteTask,
};
export default tasksOperations;
