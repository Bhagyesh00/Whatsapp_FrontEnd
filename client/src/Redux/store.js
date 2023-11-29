// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../src/Redux/features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here if needed
  },
});
