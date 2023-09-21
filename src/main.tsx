import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";
import { Perfil } from "./pages/Perfil/Perfil";
import { CreateUser } from "./pages/CreateUser/CreateUser";
import { PrivateRoute } from "./components/PrivateRoute";
import Films from "./pages/Films/Films";

function isAuthenticated() {
  return localStorage.getItem("token") !== null;
}
const auth = isAuthenticated();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main",
    element: (
      <PrivateRoute auth={auth}>
        <Main />
      </PrivateRoute>
    ),
  },
  {
    path: "/createUser",
    element: <CreateUser />,
  },

  {
    path: "/perfil",
    element: (
      <PrivateRoute auth={auth}>
        <Perfil />
      </PrivateRoute>
    ),
  },
  {
    path: "/films",

    element: (
      <PrivateRoute auth={auth}>
        <Films />
      </PrivateRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
