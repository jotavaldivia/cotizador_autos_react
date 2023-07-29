import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Error } from "./pages";
import { Default } from "./layouts";

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
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
