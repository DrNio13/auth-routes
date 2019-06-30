import React from "react";
import { UserAuthenticated } from "../AuthContext";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  loginAndRedirect(login) {
    login();
    this.goToDashboard();
  }

  goToDashboard() {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <React.Fragment>
        Login - public route
        <UserAuthenticated.Consumer>
          {({ isUserAuthenticated, login }) =>
            isUserAuthenticated ? (
              <p>
                you are already logged in - you can view the dashboard{" "}
                <button
                  onClick={() => {
                    this.goToDashboard();
                  }}
                >
                  Dashboard
                </button>{" "}
              </p>
            ) : (
              <div>
                <p> you are not logged - you can't access /dashboard </p>
                <button
                  onClick={() => {
                    this.loginAndRedirect(login);
                  }}
                >
                  Login
                </button>
              </div>
            )
          }
        </UserAuthenticated.Consumer>
      </React.Fragment>
    );
  }
}

export default withRouter(Login);
