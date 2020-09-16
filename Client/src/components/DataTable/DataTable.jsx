import React, { useRef, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import * as d3 from "d3";
import { CircularProgress } from "@material-ui/core";
import Header from "../Common/Header/Header";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { Container } from "@material-ui/core/";

import { select } from "d3";

export default function DataTable() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <center>
        <>
          <CircularProgress className="loadcircle" color="secondary" />
        </>
      </center>
    );
  }
  return (
    (isAuthenticated && (
      <>
        <Header />
        <Container maxWidth="sm" className="big-container">
          <Container
            maxWidth="sm"
            className="big-container__coin-container"
          ></Container>
        </Container>
      </>
    )) || <NoAuthorized />
  );
}
