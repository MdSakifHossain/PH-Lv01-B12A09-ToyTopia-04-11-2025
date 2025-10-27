import { createBrowserRouter } from "react-router";
import axios from "axios";

import App from "../App";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";

const api_options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
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
          const { data } = await axios.request(api_options);
          return data;
        },
        Component: HomePage,
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);
