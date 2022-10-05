import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/User/userSlice';
import loginReducer from '../features/Login/loginSlice';

export const store = configureStore({
  reducer: {
    login   : loginReducer,
    user    : userReducer,
  },
});
