import { createSlice } from "@reduxjs/toolkit";
const modalSlice = createSlice({
  name: "modalAlert",
  initialState: { isOpen: false},
  reducers: {
     modalState: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { modalState } = modalSlice.actions;
export default modalSlice.reducer;
