import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    cart: userSlice.reducer,
  },
});

export default store;
