import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "../components/layouts/rootLayout";
import Budgets from "@/pages/bugdets/budgets";
import Transactions from "@/pages/transactions/transactions";
import Settings from "@/pages/settings/settings";

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
        element: <Transactions />,
      },
      {
        path:'/settings',
        element: <Settings />,
      },
     
    ],
  },
]);
