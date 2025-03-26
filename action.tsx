import { LOGIN, LOGOUT, CheckLogin } from "./type";


export const handdleLogin = ():CheckLogin => ({
  type: LOGIN
});

export const handdleLogout = ():CheckLogin => ({
  type: LOGOUT
});
