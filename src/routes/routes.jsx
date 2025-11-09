import { createBrowserRouter } from "react-router";

import App from "../layouts/App";
import PageNotFound from "../layouts/PageNotFound";
import PrivatePage from "../layouts/PrivatePage";

import HomePage from "../pages/HomePage";
import AllGames from "../pages/AllGames";
import AllCategories from "../pages/AllCategories";
import SingleCategory from "../pages/SingleCategory";
import GameDetails from "../pages/GameDetails";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfilePage from "../pages/ProfilePage";

import LoadingSpinner from "../components/LoadingSpinner";

import { homeLoader } from "../loaders/homeLoader";
import { gamesLoader } from "../loaders/gamesLoader";
import { gameDetailLoader } from "../loaders/gameDetailLoader";
import { singleCategoryLoader } from "../loaders/singleCategoryLoader";
import ForgotPage from "../pages/ForgotPage";

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
        element: (
          <PrivatePage>
            <AllGames />
          </PrivatePage>
        ),
      },
      {
        path: "games/:id",
        loader: gameDetailLoader,
        element: (
          <PrivatePage>
            <GameDetails />
          </PrivatePage>
        ),
      },
      {
        path: "categories",
        Component: AllCategories,
      },
      {
        path: "categories/:category",
        loader: singleCategoryLoader,
        element: (
          <PrivatePage>
            <SingleCategory />
          </PrivatePage>
        ),
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
      {
        path: "profile",
        element: (
          <PrivatePage>
            <ProfilePage />
          </PrivatePage>
        ),
      },
      {
        path: "forgot",
        element: <ForgotPage />,
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
