import React from "react";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
import { Container } from "@material-ui/core/";
import LogOut from "../LogOut/LogOut";
import Profile from "../Profile/Profile";

function AddMovement() {
  return (
    <>
      <Header />
      <Container maxWidth="sm" className="big-container">
        <SubMenu />
        <Profile />
        <Container
          maxWidth="sm"
          className="big-container__coin-container"
        ></Container>
      </Container>
    </>
  );
}

export default AddMovement;
