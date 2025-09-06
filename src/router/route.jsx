import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Profile from "../pages/Profile/Profile";
import Account from "../pages/Account/Account";
import Sports from "../pages/Sports/Sports";
import PlayIn from "../pages/PlayIn/PlayIn";
import Multi from "../pages/Multi/Multi";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "account",
        Component: Account,
      },
      {
        path: "sports",
        Component: Sports,
      },
      {
        path: "play-in",
        Component: PlayIn,
      },
      {
        path: "multi",
        Component: Multi,
      },
    ],
  },
]);
