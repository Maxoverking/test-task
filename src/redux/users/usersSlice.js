import { createSlice } from "@reduxjs/toolkit";
import { usersInitState } from "./userState";
import {
  usersChangeActionMinus,
  usersChangeActionPlus,
  usersGetAction,
} from "./actions";
import { STATUS } from "../../constants/loadingStatus";
import { updateUsers } from "../../helper/updateUsers";
import { showCard } from "../../constants/showCard";

export const usersReducer = createSlice({
  name: "users",
  initialState: usersInitState,
  reducers: {
    filtered: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(usersGetAction, (state, { payload }) => ({
        users: [...state.users, ...payload],
        status: STATUS.success,
        filter: showCard.showAll,
      }))
      .addCase(usersChangeActionPlus, (state, { payload }) => ({
        ...state,
        users: updateUsers(state.users, true, payload),
        loading: STATUS.success,
      }))
      .addCase(usersChangeActionMinus, (state, { payload }) => ({
        ...state,
        users: updateUsers(state.users, false, payload),
        loading: STATUS.success,
      }));
  },
});

export const { filtered } = usersReducer.actions;
