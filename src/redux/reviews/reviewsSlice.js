const { createSlice } = require('@reduxjs/toolkit');
const {
  fetchReviews,
  fetchReviewByOwner,
  addReview,
  updateReview,
  deleteReview,
} = require('./reviewsOperation');

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    items: [],
    ownerReviews: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.items = [];
        state.error = action.error.message;
      })
      .addCase(fetchReviewByOwner.fulfilled, (state, action) => {
        state.ownerReviews = action.payload;
        state.error = null;
      })
      .addCase(fetchReviewByOwner.rejected, (state, action) => {
        state.ownerReviews = [];
        state.error = action.error.message;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.ownerReviews = action.payload;
        state.error = null;
      })
      .addCase(addReview.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        const updatedReviewIndex = state.items.findIndex(
          review => review.id === action.payload.id
        );
        if (updatedReviewIndex !== -1) {
          state.items[updatedReviewIndex] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.items = state.items.filter(
          review => review.id !== action.payload
        );
        state.error = null;
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
