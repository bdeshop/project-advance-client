import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Profile from "../pages/Profile/Profile";
import Account from "../pages/Account/Account";
import Sports from "../pages/Sports/Sports";
import PlayIn from "../pages/PlayIn/PlayIn";
import Multi from "../pages/Multi/Multi";
import WalletLayout from "../layouts/WalletLayout";
import DekstopMyProfile from "../pages/Account/ProfilePages/DekstopMyProfile";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import MyBets from "../pages/MyBets/MyBets";
import MobileAccount from "../pages/Account/MobileAccount/MobileAccount";
import Withdraw from "../pages/Account/MyWallet/Withdraw/Withdraw";
import Deposit from "../pages/Account/MyWallet/Diposit/Deposite";
import BillingLayout from "../layouts/BillingLayout";
import Sattled from "../pages/Account/BillingRecords/Sattled/Sattled";
import Unsattled from "../pages/Account/BillingRecords/Unsattled/Unsattled";
import ResetPassword from "../pages/Account/ResetPassword/ResetPassword";
import Inbox from "../pages/Account/Inbox/Inbox";
import Transaction from "../pages/Account/Transaction Records/Transaction";

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
            Component: DekstopMyProfile,
          },
          {
            path: "my-wallet",
            Component: WalletLayout,
            children: [
              {
                index: true,
                Component: Deposit,
              },
              {
                path: "withdraw",
                Component: Withdraw,
              },
            ],
          },
          {
            path: "billing-records",
            Component: BillingLayout,
            children: [
              {
                index: true,
                Component: Sattled,
              },
              {
                path: "unsettled",
                Component: Unsattled,
              },
            ],
          },
          {
            path: "reset-password",
            Component: ResetPassword,
          },
          {
            path: "inbox",
            Component: Inbox,
          },
          {
            path: "transaction-records",
            Component: Transaction,
          }
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
  {
    path: "my-account",
    Component: MobileAccount,
  },
]);
