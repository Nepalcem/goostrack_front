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

export const fetchReviewByOwner = createAsyncThunk(
  'reviews/fetchByOwner',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/reviews/own');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/add',
  async (review, { rejectWithValue }) => {
    try {
      const response = await axios.post('/reviews/own', review);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/update',
  async ({ id, updatedReview }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/reviews/own/${id}`, updatedReview);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/reviews/own/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
