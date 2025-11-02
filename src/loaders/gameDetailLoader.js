import axios from "axios";

export const gameDetailLoader = async ({ params }) => {
  const { id } = params;

  const api_options4 = {
    method: "GET",
    url: `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_x_rapidapi_key,
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const { data: gameData } = await axios.request(api_options4);
  return { gameData };
};
