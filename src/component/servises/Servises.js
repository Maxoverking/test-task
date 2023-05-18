import axios from "axios";
axios.defaults.baseURL = "https://63bb362a32d17a50908a3770.mockapi.io/";
const allUsers = "users";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${allUsers}`);
    return data;
  } catch (error) {
    console.log("🚀  error RequestTrendingMovies", error);
  }
};
