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

  try {
    const { data: gameData } = await axios.request(api_options4);
    if (!gameData || !gameData.id) throw new Error();

    return { gameData };
  } catch (error) {
    console.log(error);
    return {};
  }
};
