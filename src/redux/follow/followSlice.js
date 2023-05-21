import { createSlice } from "@reduxjs/toolkit";

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
