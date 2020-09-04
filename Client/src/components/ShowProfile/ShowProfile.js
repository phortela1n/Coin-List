import React from "react";
import Header from "../Common/Header/Header";
import { Container } from "@material-ui/core/";
import Profile from "../Profile/Profile";

function ShowProfile() {
  return (
    <>
      <Header />
      <Container maxWidth="sm" className="big-container">
        <Container maxWidth="sm" className="big-container__coin-container">
          <Profile />
        </Container>
      </Container>
    </>
  );
}

export default ShowProfile;
