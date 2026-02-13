// User reducer slice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null,
  preferences: {},
  isLoading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setPreferences: (state, action) => {
      state.preferences = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.profile = null;
      state.preferences = {};
    }
  }
});

export const { setProfile, setPreferences, setLoading, setError, clearUser } = userSlice.actions;
export default userSlice;
