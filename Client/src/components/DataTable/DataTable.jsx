import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import Header from "../Common/Header/Header";
import TableElement from "./TableElement/TableElement";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { Container } from "@material-ui/core/";

function DataTable(props) {
  const { isAuthenticated, isLoading } = useAuth0();
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
        <Container maxWidth="sm" className="big-container big-container__table">
          <TableElement userCoins={props.userCoins} />
        </Container>
      </>
    )) || <NoAuthorized />
  );
}

function mapStateToProps(state) {
  return {
    movements: state.movements,
    userCoins: state.userCoins,
  };
}

export default connect(mapStateToProps)(DataTable);
