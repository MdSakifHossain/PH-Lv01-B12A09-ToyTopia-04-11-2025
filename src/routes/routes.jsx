import { createBrowserRouter } from "react-router";

import App from "../App";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);
