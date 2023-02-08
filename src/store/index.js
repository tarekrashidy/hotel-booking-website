import { configureStore } from "@reduxjs/toolkit";
import hotels from "./hotelSlice";
import cart from "./cartSlice";
import modalAlert from "./modalSlice";

export default configureStore({
  reducer: {
    hotels,
    cart,
    modalAlert
  },
});
