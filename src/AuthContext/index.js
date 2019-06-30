import React from "react";

export const isUserAuthDefaultVal = false;

const context = {
  isUserAuthenticated: isUserAuthDefaultVal,
  login: () => {},
  logout: () => {}
};

export const UserAuthenticated = React.createContext(context);
