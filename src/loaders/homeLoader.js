import axios from "axios";

const api_options1 = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_x_rapidapi_key,
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};
const api_options2 = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_x_rapidapi_key,
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const homeLoader = async () => {
  const { data: allGames } = await axios.request(api_options1);
  const { data: popularGames } = await axios.request(api_options2);
  return { allGames, popularGames };
};
