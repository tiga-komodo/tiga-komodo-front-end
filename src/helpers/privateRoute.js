import React from "react";
import { Route, Redirect } from "react-router-dom";

import { clientAuth } from "./auth";

export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        clientAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login&register",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
