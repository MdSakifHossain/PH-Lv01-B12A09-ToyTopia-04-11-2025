import { createBrowserRouter } from "react-router";

import App from "../App";

import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import AllGames from "../pages/AllGames";
import AllCategories from "../pages/AllCategories";
import SingleCategory from "../pages/SingleCategory";
import GameDetails from "../pages/GameDetails";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import LoadingSpinner from "../components/LoadingSpinner";

import { homeLoader } from "../loaders/homeLoader";
import { gamesLoader } from "../loaders/gamesLoader";
import { gameDetailLoader } from "../loaders/gameDetailLoader";
import { singleCategoryLoader } from "../loaders/singleCategoryLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <LoadingSpinner />,
    Component: App,
    children: [
      {
        index: true,
        loader: homeLoader,
        Component: HomePage,
      },
      {
        path: "games",
        loader: gamesLoader,
        Component: AllGames,
      },
      {
        path: "games/:id",
        loader: gameDetailLoader,
        Component: GameDetails,
      },
      {
        path: "categories",
        Component: AllCategories,
      },
      {
        path: "categories/:category",
        loader: singleCategoryLoader,
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
