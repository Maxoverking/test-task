import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { followingReducer } from "./follow/followSlice";

const persistConfig = {
  key: "follow",
  storage,
};

export const followReducer = persistReducer(
  persistConfig,
  followingReducer.reducer
);
