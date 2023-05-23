import { createAction } from "@reduxjs/toolkit";

export const usersGetAction = createAction("USERS");
export const usersChangeActionPlus = createAction("FOLLOWER_PLUS");
export const usersChangeActionMinus = createAction("FOLLOWER_MINUS");
export const usersChangeActionStatus = createAction("STATUS");
