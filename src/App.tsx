import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LayoutWrapper from "./components/layout/LayoutWrapper";
import PrivateRoute from "./components/routing/PrivateRoute";
import RestrictedRoute from "./components/routing/RestrictedRoute";
import { PageRoutes } from "./global/types";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Switch>
          <PrivateRoute path={PageRoutes.Home} Component={HomePage} exact />
          <RestrictedRoute path={PageRoutes.Login} Component={LoginPage} />
        </Switch>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
