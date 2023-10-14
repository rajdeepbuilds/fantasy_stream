import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/authentication";
const api_key = "dd33ffed4f93150c66a56a7ecb704c94";

const getTrendingVideo=axios.get(this.movieBaseurl+"/trending/all/day?api_key"+api_key)

export default {
  getTrendingVideo
};