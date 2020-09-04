import React from "react";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { Container } from "@material-ui/core/";
import { useAuth0 } from "@auth0/auth0-react";

function AddMovement() {
  const { isAuthenticated } = useAuth0();
  return (
    (isAuthenticated && (
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
    )) || <NoAuthorized />
  );
}

export default AddMovement;
