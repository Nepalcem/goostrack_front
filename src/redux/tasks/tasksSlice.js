import {
  addTask,
  deleteTask,
  fetchAllTasks,
  updateTask,
} from './tasksOperation';

const { createSlice } = require('@reduxjs/toolkit');

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllTasks.fulfilled, (state, { payload }) => {
        state.items = payload.tasks;
        state.error = null;
      })
      .addCase(fetchAllTasks.rejected, (state, { payload }) => {
        state.items = [];
        state.error = payload;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
      })
      .addCase(addTask.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        const updatedTaskIndex = state.items.findIndex(
          task => task._id === payload.result._id
        );
        if (updatedTaskIndex !== -1) {
          state.items[updatedTaskIndex] = payload.result;
        }
        state.error = null;
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(task => task._id !== payload);
        state.error = null;
      })
      .addCase(deleteTask.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
