import React, { StrictMode } from "react";

import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register/Register.tsx";

import ReactDom from "react-dom/client";
import Login from "./Pages/LogIn/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const root = document.getElementById("root");
if (!root) throw new Error("root container missing in index html");

ReactDom.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
