import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const gethotels = createAsyncThunk(
  "hotel/gethotels",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {

      const result = await fetch('http://localhost:3001/hotels/');
      
    const data = await result.json();
  
      return data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const gethotel = createAsyncThunk(
  "hotel/gethotel",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      
      const result = await fetch(`
      
      http://localhost:3001/hotels/${item}`, {
        method: "GET",
        headers: { "content-type": "application/json;charset=UTF-8" },
      });

      const data = await result.json();
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const hotelslice = createSlice({
  name: "hotel",
  initialState: { hotel: [], isLoading: false, error: null, hotelInfo: []},
  extraReducers: {
    
    [gethotels.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [gethotels.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hotels = action.payload;
    },
    [gethotels.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [gethotel.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [gethotel.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hotelInfo = action.payload;
    },
    
  },
});
export default hotelslice.reducer;
