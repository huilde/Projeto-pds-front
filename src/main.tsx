import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";
import { CreateUser } from "./pages/CreateUser/CreateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "/createUser",
    element: <CreateUser />,
  },

  // { path: "/perfil", element: <Perfil /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
