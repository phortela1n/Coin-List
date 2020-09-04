import React from "react";
import Header from "../Common/Header/Header";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import SubMenu from "../Common/SubMenu/SubMenu";
import { Container } from "@material-ui/core/";
import { useAuth0 } from "@auth0/auth0-react";

function AddCoin() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    (isAuthenticated && (
      <>
        <Header />
        <Container maxWidth="sm" className="big-container">
          <SubMenu />
          <Container maxWidth="sm" className="big-container__coin-container">
            <h2>You are authorized : ) </h2>
          </Container>
        </Container>
      </>
    )) || <NoAuthorized />
  );
}

export default AddCoin;
