import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    (isAuthenticated && (
      <div className="profile-container">
        <h2 className="profile-container__user-name">
          Your user name: {user.name}
        </h2>
        <p className="profile-container__email">Your email: {user.email}</p>
      </div>
    )) || <NoAuthorized />
  );
};

export default Profile;
