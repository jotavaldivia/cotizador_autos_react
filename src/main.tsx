import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Error404 } from "./pages";
import { Default } from "./layouts";

import { CarQuoterProvider } from "./context/carQuoterProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CarQuoterProvider>
      <RouterProvider router={router} />
    </CarQuoterProvider>
  </React.StrictMode>
);
