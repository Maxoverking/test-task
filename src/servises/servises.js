import axios from "axios";
import { updatedUsers } from "../helper/updateUsers";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { setPages } from "../../redux/users/usersSlice";
axios.defaults.baseURL = "https://63bb362a32d17a50908a3770.mockapi.io/";
const allUsers = "users";

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axios.get(`${allUsers}`, {
      params: {
        page,
        limit: 3,
      },
    });
    return data;
  } catch (error) {
    console.log("🚀  error getUsers", error);
  }
};
export const updateUser = async (user, isIncrement) => {
  const update = updatedUsers(user, isIncrement);
  try {
    const { data } = await axios.put(`${allUsers}/${user.id}`, update);
    return data;
  } catch (error) {
    console.log("🚀  error getUsers", error);
  }
};

// export const getUsers = createAsyncThunk(
//   "users/fetchUsers",
//   async (page = 1, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`${allUsers}`, {
//         params: {
//           page,
//           limit: 3,
//         },
//       });
//       thunkAPI.dispatch(setPages(page));

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const updateUser = createAsyncThunk(
//   "users/followUser",
//   async (user, isIncrement, thunkAPI) => {
//     const update = updatedUsers(user, isIncrement);
//     try {
//       const { data } = await axios.put(`${allUsers}/${user.id}`, update);

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
