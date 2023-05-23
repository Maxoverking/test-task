// import { showCard } from "../../constants/showCard";
import { createSlice } from "@reduxjs/toolkit";
import { usersInitState } from "./userState";
import {
  usersChangeActionMinus,
  usersChangeActionPlus,
  usersChangeActionStatus,
} from "./actions";
import { updateUsers } from "../../helper/updateUsers";
import { STATUS } from "../../constants/statusConstant";
import { getUsersThunk } from "../../servises/servises";
// import { usersStatusSelector } from "./selectors";
const handlePending = (state) => {
  state.status = STATUS.loading;
};

// const handleRejected = (state, action) => {
//   state.status = STATUS.error;
//   state.error = action.payload;
// };

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
      .addCase(getUsersThunk.pending, handlePending)
      .addCase(getUsersThunk.fulfilled, (state, { payload }) => ({
        ...state,
        users: [...state.users, ...payload],
        status: STATUS.success,
      }))
      .addCase(usersChangeActionPlus, (state, { payload }) => ({
        ...state,
        users: updateUsers(state.users, true, payload),
        status: STATUS.loading,
      }))
      .addCase(usersChangeActionMinus, (state, { payload }) => ({
        ...state,
        users: updateUsers(state.users, false, payload),
        status: STATUS.loading,
      }))
      .addCase(usersChangeActionStatus, (state, { payload }) => ({
        ...state,
        status: STATUS.success,
      }));
  },
});

export const { filtered, pagesStore } = usersReducer.actions;
