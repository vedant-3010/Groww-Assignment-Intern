// redux/newsFeedSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'QnAJ_PJE0cJQPm7z1eLB0Is9kOp_rIOI4jXnnnh_THs'; // Replace with your Unsplash API key

const fetchRandomPhotos = createAsyncThunk(
    'newsFeed/fetchRandomPhotos',
    async (page) => {
      const response = await axios.get(`https://api.unsplash.com/photos/random`, {
        params: {
          count: 10,
          page,
          client_id: API_KEY,
        },
      });
      return response.data;
    }
  );
  
  const newsFeedSlice = createSlice({
    name: 'newsFeed',
    initialState: {
      photos: [],
      loading: false,
      error: null,
      hasMore: true, // Initialize hasMore to true
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchRandomPhotos.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchRandomPhotos.fulfilled, (state, action) => {
          state.photos = [...state.photos, ...action.payload];
          state.loading = false;
          state.error = null;
          if (action.payload.length === 0) {
            state.hasMore = false; // Set hasMore to false when no more photos are available
          }
        })
        .addCase(fetchRandomPhotos.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          state.hasMore = false; // Set hasMore to false in case of an error
        });
    },
  });
  
  export { fetchRandomPhotos };
  export default newsFeedSlice.reducer;