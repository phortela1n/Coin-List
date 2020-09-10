import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../LoginButton/LoginButton.scss";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <a
      className="login-anchor"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </a>
  );
};

export default LogoutButton;
