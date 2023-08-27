const { createSlice } = require('@reduxjs/toolkit');
const { fetchReviews } = require('./reviewsOperation');

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    items: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchReviews.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(fetchReviews.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
