import React from "react";
import Stepper from "./Stepper/Stepper";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { Container } from "@material-ui/core/";

export default function AddMovement() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    (isAuthenticated && (
      <>
        <Header />
        <Container
          maxWidth="sm"
          className="big-container big-container--addCoin"
        >
          <SubMenu changeValue={2} />
          <Container
            maxWidth="sm"
            className="big-container__coin-container big-container__movements"
          >
            <Stepper />
          </Container>
        </Container>
      </>
    )) || <NoAuthorized />
  );
}
