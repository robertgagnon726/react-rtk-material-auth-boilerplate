import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { PageRoutes } from "../../../global/types";

interface Props {
  Component: React.ElementType;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<Props> = ({ Component, ...rest }: Props) => {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={PageRoutes.Login} />
        )
      }
    />
  );
};

export default PrivateRoute;
