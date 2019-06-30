import React from "react";
import { UserAuthenticated } from "../AuthContext";

export default class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h6>Dashboard - You are logged in </h6>

        <UserAuthenticated.Consumer>
          {({ logout }) => <button onClick={()=>{logout()}}>Logout</button>}
        </UserAuthenticated.Consumer>
      </React.Fragment>
    );
  }
}
