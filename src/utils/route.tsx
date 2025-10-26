import Header from "@/components/Header";
import Home from "@/pages/home";
import Hourly from "@/pages/hourly";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "/hourly", element: <Hourly /> },
    ],
  },
]);
