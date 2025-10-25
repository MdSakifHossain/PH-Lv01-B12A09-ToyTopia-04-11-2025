import { createBrowserRouter } from "react-router";
import axios from "axios";

import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import AllAppsPage from "../pages/AllAppsPage/AllAppsPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import AppDetailsPage from "../pages/AppDetailsPage/AppDetailsPage";
import InstallationPage from "../pages/InstallationPage/InstallationPage";
import LoadingSpinner from "../components/LoadingSpinner";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        loader: async () => axios("/apps.json"),
        Component: HomePage,
      },
      {
        path: "/apps",
        loader: async () => axios("/apps.json"),
        Component: AllAppsPage,
      },
      {
        path: "/apps/:id",
        loader: async () => await axios("/apps.json"),
        Component: AppDetailsPage,
      },
      {
        path: "/installation",
        loader: async () => axios("/apps.json"),
        Component: InstallationPage,
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
