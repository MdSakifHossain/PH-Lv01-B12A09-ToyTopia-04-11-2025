import axios from "axios";

const api_options2 = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_x_rapidapi_key,
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export const gamesLoader = async () => {
  const { data: popularGames } = await axios.request(api_options2);
  return { popularGames };
};
