import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersChangeActionStatus } from '../redux/users/actions';
import { STATUS } from '../constants/statusConstant';

const usersApi = axios.create({
  baseURL: 'https://63bb362a32d17a50908a3770.mockapi.io/',
});

const usersEndpoint = 'users';

export const getUsersThunk = createAsyncThunk(
  usersEndpoint,
  async (page = 1, thunkAPI) => {
    try {
      const { data } = await usersApi.get(`${usersEndpoint}`, {
        params: {
          page,
          limit: 3,
        },
      });
      return data;
    } catch (error) {
      console.log('🚀  error getUsers', error);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  `users/id`,
  async (userUpdeted, thunkAPI) => {
    try {
      const { data } = await usersApi.put(
        `${usersEndpoint}/${userUpdeted.id}`,
        userUpdeted
      );

      thunkAPI.dispatch(usersChangeActionStatus(STATUS.success));

      return data;
    } catch (error) {
      console.log('🚀  error getUsers', error);
    }
  }
);

//=====================================================

/// Было
// export const getUsers = async (page = 1) => {
//   try {
//     const { data } = await usersApi.get(`${allUsers}`, {
//       params: {
//         page,
//         limit: 3,
//       },
//     });
//     return data;
//   } catch (error) {
//     console.log("🚀  error getUsers", error);
//   }
// };

// export const updateUser = async (user, isIncrement) => {
//   const updated = updatedUsers(user, isIncrement);
//   try {
//     const { data } = await usersApi.put(`${usersEndpoint}/${user.id}`, updated);
//     console.log("🚀  метод пут на mockApi:", data.followers + " id " + data.id);
//     return data;
//   } catch (error) {
//     console.log("🚀  error getUsers", error);
//   }
// };
