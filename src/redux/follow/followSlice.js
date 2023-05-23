import { createSlice } from "@reduxjs/toolkit";
// import { updateUserThunk } from "../../servises/servises";
// import { updateUsers } from "../../helper/updateUsers";

export const followInitState = {
  follow: [],
};

export const followingReducer = createSlice({
  name: "follow",
  initialState: followInitState,
  reducers: {
    plusFollowerAction: (state, { payload }) => ({
      ...state,
      follow: [...state.follow, payload],
    }),
    minusFollowerAction: (state, { payload }) => ({
      ...state,
      follow: state.follow.filter((element) => element !== payload),
    }),
  },
});

export const { plusFollowerAction, minusFollowerAction } =
  followingReducer.actions;
