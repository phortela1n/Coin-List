import React from "react";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
import { Container } from "@material-ui/core/";
import LoginButton from "../LoginButton/LoginButton";

function AddCoin() {
  return (
    <>
      <Header />
      <Container maxWidth="sm" className="big-container">
        <SubMenu />
        <Container
          maxWidth="sm"
          className="big-container__coin-container"
        ></Container>
      </Container>
    </>
  );
}

export default AddCoin;
