import { createSelector } from "@reduxjs/toolkit";
import { showCard } from "../../constants/showCard";
import { existingIdSelector } from "../follow/selector";

export const usersSelector = (state) => state.users.users;
export const usersStatusSelector = (state) => state.users.status;
export const usersFilterSelector = (state) => state.users.filter;
export const usersPagesSelector = (state) => state.users.pages;

export const usersFollowSelector = createSelector(
  [usersSelector, existingIdSelector, usersFilterSelector],
  (users, follow, filter) => {
    switch (filter) {
      case showCard.follow:
        return users.filter((item) => !follow.includes(item.id));
      case showCard.followings:
        return users.filter((item) => follow.includes(item.id));
      default:
        return users;
    }
  }
);
