import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goostrack-backend.onrender.com';

export const fetchReviews = createAsyncThunk(
  'reviews/all',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/reviews');
      console.log('response data', response.data.reviews);
      return response.data.reviews;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
