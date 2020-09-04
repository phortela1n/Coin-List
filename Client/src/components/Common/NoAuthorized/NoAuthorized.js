import React from "react";
import Header from "../Header/Header";
import LoginButton from "../../LoginButton/LoginButton";
import { Container } from "@material-ui/core/";
import "./NoAuthorized.css";

function NoAuthorized() {
  return (
    <section className="full-page">
      <Header />
      <Container maxWidth="sm" className="big-container-default">
        <Container
          maxWidth="sm"
          className="big-container-default__coin-container default-authorization"
        >
          <h2 className="default-authorization__authorized-title">
            You are not authorized, please Log in:
          </h2>
          <buttom>
            <LoginButton />
          </buttom>
        </Container>
      </Container>
    </section>
  );
}

export default NoAuthorized;
