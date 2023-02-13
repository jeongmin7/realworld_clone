import { createSlice } from '@reduxjs/toolkit';

export interface LoginState {
  isLogin: Boolean;
}

const initialState = {
  isLogin: false,
} as LoginState;

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
export const loginActions = loginSlice.actions;
export default loginSlice;
