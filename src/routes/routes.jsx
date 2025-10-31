import { createBrowserRouter } from "react-router";
import axios from "axios";

import App from "../App";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import AllGames from "../pages/AllGames";
import AllCategories from "../pages/AllCategories";
import SingleCategory from "../pages/SingleCategory";
import GameDetails from "../pages/GameDetails";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: async () => {
          const { data: allGames } = await axios.request(api_options1);
          const { data: popularGames } = await axios.request(api_options2);
          return { allGames, popularGames };
        },
        Component: HomePage,
      },
      {
        path: "games",
        loader: async () => {
          const { data: popularGames } = await axios.request(api_options2);
          return { popularGames };
        },
        Component: AllGames,
      },
      {
        path: "games/:id",
        loader: async ({ params }) => {
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
        },
        Component: GameDetails,
      },
      {
        path: "categories",
        Component: AllCategories,
      },
      {
        path: "categories/:category",
        loader: async ({ params }) => {
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
        },
        Component: SingleCategory,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
