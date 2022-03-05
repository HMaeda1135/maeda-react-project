import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: { left: false },
  todos: [],
};

const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    // set menu's open or close
    setOpen: (state, action) => {
      return Object.assign({}, state, { open: action.payload });
    },
  },
});

export default slice.reducer;

export const { setOpen } = slice.actions;
