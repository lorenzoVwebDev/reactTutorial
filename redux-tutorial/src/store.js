// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import birdsReducer from './slices/birdsSlices.js';


// Configure the Redux store
const store = configureStore({
  reducer: {
    birds: birdsReducer
  }
});

export default store;
