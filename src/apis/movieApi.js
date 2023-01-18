import Axios from "./@core";

const PATH = "/movie";
const MovieAPi = {
  getPopularMovies({ params }) {
    console.log(params);
    return Axios.get(PATH + "/popular", { params });
  },
  getSearchMovie({ params }) {
    return Axios.get(PATH + "/search/movie", { params });
  },
  getNowPlayingMovies({ params }) {
    return Axios.get(PATH + "/now_playing", { params });
  },
  getTopRateMovies({ params }) {
    return Axios.get(PATH + "/top_rated", { params });
  },
  getUpcomingMovies({ params }) {
    return Axios.get(PATH + "/upcoming", { params });
  },
};
export default MovieAPi;
