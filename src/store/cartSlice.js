
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const insertHotel = createAsyncThunk(
     "cart/insertHotel",
     async (cartData, thunkAPI) => {
       const { rejectWithValue } = thunkAPI;
       try {
         const result = await fetch(`http://localhost:3001/cart/`, {
           method: "Post",
           body: JSON.stringify(cartData),
           headers: { "content-type": "application/json;charset=UTF-8" },
         });
         const data = await result.json();
         

         return data;
       } catch (error) {
         return rejectWithValue(error.message);
       }
     },
);
export const getcart = createAsyncThunk(
     "cart/getcart",
     async (_, thunkAPI) => {
       const { rejectWithValue } = thunkAPI;
       try {
   
         const result = await fetch('http://localhost:3001/cart/');
         
       const data = await result.json();
     
         return data;
   
       } catch (error) {
         return rejectWithValue(error.message);
       }
     },
);
export const deletehotel = createAsyncThunk(
  "cart/deletehotel",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3001/cart/${item.id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json;charset=UTF-8" },
      });

      return item;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
); 
const cartSlice = createSlice({
     name: "cart",
     initialState: { cart:[] },
     extraReducers: {
          [getcart.pending]: (state, action) => {
               state.isLoading = true;
               state.error = null;
             },
             [getcart.fulfilled]: (state, action) => {
               state.isLoading = false;
               state.cart = action.payload;
             },
             [getcart.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
             },
        // isert into cart
        [insertHotel.pending]: (state, action) => {
         state.isLoading = true;
         state.error = null;
       },
       [insertHotel.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cart.push(action.payload);
       },
       [insertHotel.rejected]: (state, action) => {
         state.isLoading = false;
         state.error = action.payload;
       },
         //delete books
    [deletehotel.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deletehotel.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cart = state.cart.filter((book) => book.id !== action.payload.id);
    },
    [deletehotel.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
     },
   });
   export default cartSlice.reducer;