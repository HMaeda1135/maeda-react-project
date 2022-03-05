import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "store/reducer/commonReducer";

const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
