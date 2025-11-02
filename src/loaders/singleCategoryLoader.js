import axios from "axios";

export const singleCategoryLoader = async ({ params }) => {
  const { category } = params;

  const api_options3 = {
    method: "GET",
    url: `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}&sort-by=popularity`,
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_x_rapidapi_key,
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  const { data: games } = await axios.request(api_options3);
  return { games, category };
};
