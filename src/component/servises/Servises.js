import axios from "axios";
import { updatedUsers } from "../../helper/updateUsers";
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
export const followUser = async (user, isIncrement) => {
  const update = updatedUsers(user, isIncrement);
  try {
    const { data } = await axios.put(`${allUsers}/${user.id}`, update);
    return data;
  } catch (error) {
    console.log("🚀  error getUsers", error);
  }
};
