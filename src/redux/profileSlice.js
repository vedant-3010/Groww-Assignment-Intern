// redux/profileSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'QnAJ_PJE0cJQPm7z1eLB0Is9kOp_rIOI4jXnnnh_THs'; // Replace with your Unsplash API key

const fetchUserProfile = createAsyncThunk('profile/fetchUserProfile', async (username) => {
  const userResponse = await axios.get(`https://api.unsplash.com/users/${username}`, {
    params: {
      client_id: API_KEY,
    },
  });
  const user = userResponse.data;

  const photosResponse = await axios.get(`https://api.unsplash.com/users/${username}/photos`, {
    params: {
      client_id: API_KEY,
      per_page: 10,
    },
  });
  const photos = photosResponse.data;

  return { user, photos };
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: null,
    photos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.photos = action.payload.photos;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchUserProfile };
export default profileSlice.reducer;
