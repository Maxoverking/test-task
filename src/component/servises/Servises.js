import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "?api_key=7df6de4dd7060a529be76412dec8d9af";
const trending_all = "/trending/movie/day";
// const search_movie = "/search/movie";

export const RequestTrendingMovies = async () => {
  try {
    const response = await axios.get(`${trending_all}${API_KEY}`);
    // return response.data.results;
    return response.data.results.map(({ id, title, poster_path }) => {
      return {
        id,
        title,
        poster_path,
      };
    });
  } catch (error) {
    console.log("🚀  error RequestTrendingMovies", error);
  }
};
