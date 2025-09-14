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
import VIPLayout from "../layouts/VIPLayout";
import MYVIP from "../pages/Account/VIP/MyVIP/MYVIP";
import VIPReceived from "../pages/Account/VIP/VIPReceived/VIPReceived";
import VIPUsed from "../pages/Account/VIP/VIPUsed/VIPUsed";
import VIPHistory from "../pages/Account/VIP/VIPHistory/VIPHIstory";
import Transactions from "../pages/Account/MobileAccount/Transactions/Transactions";
import RealWalletLayout from "../layouts/RealWalletLayout";
import Rewards from "../pages/Account/MobileAccount/Rewards/Rewards";
import VIPs from "../pages/Account/MobileAccount/VIPs/VIPs";
import Referral from "../pages/Account/MobileAccount/Referral/Referral";
import PL from "../pages/Account/MobileAccount/PL/PL";
import Completed from "../pages/Account/MobileAccount/Completed/Completed";
import Bonus from "../pages/Account/MobileAccount/Bonus/Bonus";
import Active from "../pages/Account/MobileAccount/Active/Active";
import PLAll from "../pages/Account/MobileAccount/PL/PLAll/PLAll";
import PLLayout from "../layouts/PLLayout";
import PLAccount from "../pages/Account/MobileAccount/PL/PLAccount/PLAccount";
import ParleyRecords from "../pages/Account/ParleyRecords/ParleyRecords";

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
            path: "vip",
            Component: VIPLayout,
            children: [
              {
                index: true,
                Component: MYVIP,
              },
              {
                path: "vip-received",
                Component: VIPReceived,
              },
              {
                path: "vip-used",
                Component: VIPUsed,
              },
              {
                path: "vip-history",
                Component: VIPHistory,
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
          },
          {
            path: "real-wallet",
            Component: RealWalletLayout,
            children: [
              {
                path: "transactions",
                Component: Transactions,
              },
              {
                path: "rewards",
                Component: Rewards,
              },
              {
                path: "vips",
                Component: VIPs,
              },
              {
                path: "referral",
                Component: Referral,
              },
              {
                path: "pl",
                Component: PLLayout,
                children: [
                  {
                    path: "pl-all",
                    Component: PLAll,
                  },
                  {
                    path: "p-l",
                    Component: PL,
                  },
                  {
                    path: "pl-account",
                    Component: PLAccount,
                  },
                ],
              },
              {
                path: "completed",
                Component: Completed,
              },
              {
                path: "bonus",
                Component: Bonus,
              },
              {
                path: "active",
                Component: Active,
              },
            ],
          },
          {
            path: "parley-records",
            Component: ParleyRecords,
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
  {
    path: "my-account",
    Component: MobileAccount,
  },
]);
