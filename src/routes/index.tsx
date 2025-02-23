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
import AnimatedPage from "@/components/ui/animatedPage";

export const routes = createBrowserRouter([
  {
    path: "/",

    element: <RootLayout />,
    children: [
      {
        index: true,
        element:  <AnimatedPage><App /></AnimatedPage>,
      },
      {
        path: '/budgets',
        element: <AnimatedPage><Budgets /></AnimatedPage>,
      },
      {
        path: '/transactions',
        element: <AnimatedPage><Transactions /></AnimatedPage>,
      },
      {
        path: '/analytics',
        element: <AnimatedPage><Analytics /></AnimatedPage>,
      },
      {
        path: '/settings',
        element:<AnimatedPage> <Settings /></AnimatedPage>,
      },

    ],
  },
  {
    path: "/auth",
    element: <AnimatedPage><AuthLayout /></AnimatedPage>,
    children: [

      {
        path: 'login',
        element: <AnimatedPage> <SignIn /></AnimatedPage>
      },
      {
        path: 'register',
        element:  <AnimatedPage><SignUp /></AnimatedPage>
      },
      {
        path: 'forget-password',
        element:  <AnimatedPage><ForgetPassword /></AnimatedPage>
      },
      {
        path: 'reset-password',
        element: <AnimatedPage> <ResetPassword /></AnimatedPage>
      },
      {
        path: 'verify-email',
        element: <AnimatedPage> <VerifyEmail /></AnimatedPage>
      },
    ]
  },
]);
