import React, { useContext } from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";
import { FirebaseContext } from "./contexts";
import paths from "./paths";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useContext(FirebaseContext);
  console.log("PrivateRoute");
  console.log(user);
  console.log(children);
  console.log(rest);
  return (
    <Route
      {...rest}
      element={() => (user ? children : <Navigate to={paths.top} />)}
    />
    // <Route element={paths.top} />
  );
};

export default PrivateRoute;
