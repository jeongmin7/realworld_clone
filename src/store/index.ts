import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './Loginslice';

const store = configureStore({
  reducer: { login: LoginSlice.reducer },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
