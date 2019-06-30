import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { UserAuthenticated } from "./AuthContext";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserAuthenticated: this.isLoggedIn(),
      login: this.login,
      logout: this.logout
    };
  }

  isLoggedIn() {
    return (
      localStorage.getItem("isUserAuthenticated") === true ||
      localStorage.getItem("isUserAuthenticated") === "true"
    );
  }

  login = () => {
    const isLoggedIn = true;

    this.setState({ isUserAuthenticated: isLoggedIn });
    localStorage.setItem("isUserAuthenticated", isLoggedIn);
  };

  logout = () => {
    const isLoggedIn = false;

    this.setState({ isUserAuthenticated: false });
    this.setState({ isUserAuthenticated: isLoggedIn });
    localStorage.setItem("isUserAuthenticated", isLoggedIn);
  };

  render() {
    return (
      <React.Fragment>
        <UserAuthenticated.Provider value={this.state}>
          <Router>
            <PublicRoute>
              <Route path="/" component={Login} />
            </PublicRoute>
            <ProtectedRoute>
              <Route path="/dashboard" component={Dashboard} />
            </ProtectedRoute>
          </Router>
        </UserAuthenticated.Provider>
      </React.Fragment>
    );
  }
}

export default App;
