// Redux store configuration
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Import slices
// import authSlice from './slices/authSlice';
// import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    // user: userSlice.reducer,
  }
});

export default store;
