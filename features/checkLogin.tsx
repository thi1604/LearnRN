import { createSlice } from "@reduxjs/toolkit";

interface checkAuthor{
  value: boolean
}

const initialState : checkAuthor  = {
  value: false
}

const checkLogin = createSlice({
  name: 'checkLogin',
  initialState,
  reducers: {
    isLogin: (state) => {
      return {...state, value: true}
    },
    isLogout: (state) => {
      return {...state, value: false}
    }
  }
});

export const {isLogin, isLogout} = checkLogin.actions;
export default checkLogin.reducer;



