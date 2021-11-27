import axios from "axios";

export const animeData = axios.create({
  baseURL: "https://api.jikan.moe/v3/search",
});
export const animeTop = axios.create({
  baseURL: "https://api.jikan.moe/v3/",
});
