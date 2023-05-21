import { createSlice } from "@reduxjs/toolkit";
import { usersInitState } from "./userState";
import {
  usersChangeActionMinus,
  usersChangeActionPlus,
  usersGetAction,
} from "./actions";

import { updateUsers } from "../../helper/updateUsers";
import { showCard } from "../../constants/showCard";

export const usersReducer = createSlice({
  name: "users",
  initialState: usersInitState,
  reducers: {
    filtered: (state, { payload }) => {
      state.filter = payload;
    },
    pagesStore: (state, { payload }) => {
      state.pages = payload;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(usersGetAction, (state, { payload }) => ({
        users: [...state.users, ...payload],
        filter: showCard.showAll,
      }))
      .addCase(usersChangeActionPlus, (state, { payload }) => ({
        ...state,
        users: updateUsers(state.users, true, payload),
      }))
      .addCase(usersChangeActionMinus, (state, { payload }) => ({
        ...state,
        users: updateUsers(state.users, false, payload),
      }));
  },
});

export const { filtered, pagesStore} = usersReducer.actions;
