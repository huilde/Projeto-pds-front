import React from "react";
import { Login } from "../pages/Login/Login";

function PrivateRoute({
  children,
  auth,
}: {
  children: JSX.Element;
  auth: boolean;
}) {
  if (!auth) {
    return <Login />;
  }

  return children;
}

export { PrivateRoute };
