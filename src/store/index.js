import { configureStore } from "@reduxjs/toolkit";
import hotels from "./hotelSlice";
import cart from "./cartSlice";
import modalAlert from "./modalSlice";
import auth from "./authSlice";

export default configureStore({
  reducer: {
    hotels,
    cart,
    modalAlert,
    auth
  },
});
