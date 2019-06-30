import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { UserAuthenticated } from "../AuthContext";

class ProtectedRoute extends React.Component {
  render() {
    return (
      <React.Fragment>
        <UserAuthenticated.Consumer>
          {({ isUserAuthenticated }) =>
            isUserAuthenticated ? (
              this.props.children
            ) : (
              <Redirect to={{ pathname: "/login" }} />
            )
          }
        </UserAuthenticated.Consumer>
      </React.Fragment>
    );
  }
}

export default withRouter(ProtectedRoute);
