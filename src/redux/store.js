import loginReducer from "../features/Login/loginSlice";
import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import userReducer from "../features/User/userSlice";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  login   : loginReducer,
  user    : userReducer,
});

const persistConfig = {
  key       : "root",
  storage   : storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware    : [thunk],
  reducer       : persistedReducer,
});
