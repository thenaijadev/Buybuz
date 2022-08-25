import React, { useState } from "react";
import SignUp from "../pages/SignUp/SignUp";

export const AuthContext = React.createContext({
  isLoggedin: false,
  onLogInPage: false,
  onLogout: () => {},
  onRegister: () => {},
  onLogin: () => {},
  isOnLoginPage: () => {},
  isOnSignupPage: () => {},
});
const AuthContextProvider = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const [onLogin, setOnLogin] = useState(false);
  const loginHandler = () => {
    setIsLoggedin(true);
  };
  const logoutHandler = () => {
    setIsLoggedin(false);
  };

  const loginPageHandler = () => {
    setOnLogin(true);
  };
  const signUpPageHandler = () => {
    setOnLogin(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedin: isLoggedin,
        onLogInPage: onLogin,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        isOnLoginPage: loginPageHandler,
        isOnSignupPage: signUpPageHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
