import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  error   : null,
  message : null,
  status  : null,
  token   : null,
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: {
      prepare: (data) => ({
        payload: {data}
      }),
      reducer: (draft, action) => {
        draft.message   = action.payload.data.message;
        draft.status    = action.payload.data.status;
        draft.token     = action.payload.data.body.token;
      }
    },
    logout: {
      reducer: (draft) => {
        draft.message   = null;
        draft.status    = null;
        draft.token     = null;
      }
    }
  },
});

export const getToken   = (state) => state.login.token;
export const getStatus  = (state) => state.login.status;

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;