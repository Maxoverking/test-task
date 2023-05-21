import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";
import { followReducer } from "./localStore";
import { initState } from "./initState";

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    users: usersReducer.reducer,
    following: followReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
