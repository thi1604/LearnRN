import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import checkLoginReducer from "./features/checkLogin";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    checkLogin: checkLoginReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

