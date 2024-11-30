// src/slices/birdsSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Create a slice of the state
const birdsSlice = createSlice({
  name: 'birds', // Name of the slice
  initialState: [ // Initial state of the slice
    {
      name: 'robin',
      views: 1
    }
  ],
  reducers: { // Reducers to handle actions
    incrementView: (state, action) => {
      const bird = state.find(b => b.name === action.payload.name);
      if (bird) {
        bird.views += 1;
      }
    },
    addBird: (state, action) => {
      state.push(action.payload);
    }
  }
});

// Export the action creators
export const { incrementView, addBird } = birdsSlice.actions;

// Export the reducer
export default birdsSlice.reducer;
