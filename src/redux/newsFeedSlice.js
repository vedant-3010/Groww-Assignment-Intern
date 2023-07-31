import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const CACHE_DURATION = (60 * 1000) * 3; // Cache data for 4 minute

const fetchRandomPhotos = createAsyncThunk('newsFeed/fetchRandomPhotos', async (page) => {
  const response = await axios.get(`https://api.unsplash.com/photos/random`, {
    params: {
      count: 10,
      page,
      client_id: API_KEY,
    },
  });
  return response.data;
});

const newsFeedSlice = createSlice({
  name: 'newsFeed',
  initialState: {
    photos: [],
    loading: false,
    error: null,
    hasMore: true,
    lastFetchedAt: null,
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
        state.hasMore = action.payload.length > 0;
        state.lastFetchedAt = Date.now();
      })
      .addCase(fetchRandomPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.hasMore = false;
      });
  },
});

// Add a selector to check if the data is still within the caching period
export const selectIsDataCached = (state) => {
  if (!state.newsFeed.lastFetchedAt) return false;
  return Date.now() - state.newsFeed.lastFetchedAt < CACHE_DURATION;
};

export { fetchRandomPhotos };
export default newsFeedSlice.reducer;
