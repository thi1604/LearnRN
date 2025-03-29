import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./features/counter";
import checkLoginReducer from "./features/checkLogin";
import listItemReducer from "./features/listItem";
import fillter from "./features/fillter";


export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    checkLogin: checkLoginReducer,
    itemArray: listItemReducer,
    filter: fillter
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

