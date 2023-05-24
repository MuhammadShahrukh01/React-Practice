import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addCart(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
    removeUser(state, action) {},
    clearUser(state, action) {},
  },
});

export { userSlice };
export const { addCart } = userSlice.actions;
