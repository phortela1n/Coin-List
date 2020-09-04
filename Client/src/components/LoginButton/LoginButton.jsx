import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <a className="login-anchor pointer" onClick={() => loginWithRedirect()}>
      Log In
    </a>
  );
};

export default LoginButton;
