import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "../components/layouts/rootLayout";
import Budgets from "@/pages/bugdets/budgets";
import Transactions from "@/pages/transactions/transactions";
import Settings from "@/pages/settings/settings";
import Analytics from "@/pages/analytics/analytics";
import AuthLayout from "@/components/layouts/authLayout";
import SignIn from "@/pages/auth/signIn/signIn";
import SignUp from "@/pages/auth/signUp/signUp";
import ForgetPassword from "@/pages/auth/forgetPassword/forgetPassword";
import ResetPassword from "@/pages/auth/resetPassword/resetPassword";
import VerifyEmail from "@/pages/auth/verifyEmail/verifyEmail";

export const routes = createBrowserRouter([
  {
    path: "/",

    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path:'/budgets',
        element: <Budgets />,
      },
      {
        path:'/transactions',
        element: <Transactions />,
      },
      {
        path:'/analytics',
        element: <Analytics />,
      },
      {
        path:'/settings',
        element: <Settings />,
      },
     
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout/>,
    children: [
     
      {
        path:'login',
        element:<SignIn/>
      },
      {
        path:'register',
        element:<SignUp/>
      },
      {
        path:'forget-password',
        element:<ForgetPassword/>
      },
      {
        path:'reset-password',
        element:<ResetPassword/>
      },
      {
        path:'verify-email',
        element:<VerifyEmail/>
      },
    ]
  },
]);
