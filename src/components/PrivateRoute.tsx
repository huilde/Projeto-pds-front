import { useContext } from "react";
import { Route, redirect } from "react-router-dom";

const PrivateRoute = (props: any) => {
  // eslint-disable-next-line react/prop-types
  const { component: Component, isAuthenticated, ...additionalProps } = props;
  //   const { authState } = useContext(AuthContext);
  //   const routeChecker = isAuthenticated ?? authState.authenticated;
  const routeChecker = true;

  return (
    <Route
      {...additionalProps}
      render={(info: any) =>
        routeChecker ? <Component {...info} /> : redirect("/login")
      }
    />
  );
};

export default PrivateRoute;
