import { followInitState } from "./follow/followSlice";
import { usersInitState } from "./users/userState";

export const initState = {
  users: usersInitState,
  following: followInitState,
};
