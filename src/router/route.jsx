import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Profile from "../pages/Profile/Profile";
import Account from "../pages/Account/Account";
import Sports from "../pages/Sports/Sports";
import PlayIn from "../pages/PlayIn/PlayIn";
import Multi from "../pages/Multi/Multi";
import Wallet from "../pages/Profile/ProfilePages/Wallet/Wallet";
import MyProfile from "../pages/Profile/ProfilePages/MyProfile/MyProfile";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import MyBets from "../pages/MyBets/MyBets";

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
        children: [
          {
            index: true,
            Component: MyProfile,
          },
          {
            path: "wallet",
            Component: Wallet,
          },
        ],
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
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "my-bets",
        Component: MyBets,
      },
    ],
  },
]);
