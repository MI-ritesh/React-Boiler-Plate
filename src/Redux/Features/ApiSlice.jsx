// src/features/someFeature/someFeatureSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSomeData } from '../../Services/Api';

// Define async thunks
export const getSomeData = createAsyncThunk(
  'someFeature/getSomeData',
  async (_, thunkAPI) => {
    try {
      const response = await fetchSomeData();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export const createSomeData = createAsyncThunk(
//   'someFeature/createSomeData',
//   async (data, thunkAPI) => {
//     try {
//       const response = await postSomeData(data);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// Create slice
const ApiSlice = createSlice({
  name: 'someApiFeature',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSomeData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSomeData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload.data;
      })
      .addCase(getSomeData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // .addCase(createSomeData.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(createSomeData.fulfilled, (state, action) => {
      //   state.status = 'succeeded';
      //   state.data.push(action.payload);
      // })
      // .addCase(createSomeData.rejected, (state, action) => {
      //   state.status = 'failed';
      //   state.error = action.payload;
      // });
  },
});

export default ApiSlice.reducer;
