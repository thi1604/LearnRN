import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import checkLoginReducer from "./features/checkLogin";
import listItemReducer from "./features/listItem";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    checkLogin: checkLoginReducer,
    itemArray: listItemReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

