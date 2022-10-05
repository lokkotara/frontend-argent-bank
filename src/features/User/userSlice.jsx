import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createdAt   : "",
  email       : "",
  firstName   : "",
  id          : "",
  lastName    : "",
  updatedAt   : "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getInfos: {
      prepare: (data) => ({
        payload: { data },
      }),
      reducer: (draft, action) => {
        draft.createdAt   = action.payload.data.body.createdAt;
        draft.email       = action.payload.data.body.email;
        draft.firstName   = action.payload.data.body.firstName;
        draft.id          = action.payload.data.body.id;
        draft.lastName    = action.payload.data.body.lastName;
        draft.updatedAt   = action.payload.data.body.updatedAt;
      },
    },
  },
});

export const getUsername = (state) => state.user.firstName;

export const { getInfos } = userSlice.actions;

export default userSlice.reducer;