import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goostrack-backend.onrender.com';

export const fetchReviews = createAsyncThunk(
  'reviews/all',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/reviews');
      console.log('response data', response.reviews);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
