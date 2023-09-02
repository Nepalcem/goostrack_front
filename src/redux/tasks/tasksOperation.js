import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goostrack-backend.onrender.com';

export const fetchAllTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
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
