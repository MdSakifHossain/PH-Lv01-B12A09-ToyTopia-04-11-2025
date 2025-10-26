import { createBrowserRouter } from "react-router";
import axios from "axios";

import App from "../App";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";

const api_options = {
  method: "GET",
  url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
  headers: {
    "x-rapidapi-key": "faba57035dmsh8deacfd3c56beddp14cafbjsn7fcea87942d9",
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
          console.log(data);
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
