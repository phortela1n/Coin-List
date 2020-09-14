import React from "react";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Header/Header";
import { Container } from "@material-ui/core/";
import { hashHistory } from "react-router";

import { withRouter } from "react-router-dom";

/* withRouter(({ history }) => {
  history.goBack();
  return <></>;
}); */
function Refresh() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  withRouter(({ history }) => {
    history.goBack();
    return <></>;
  });
  return <>"Refresh"</>;
}

function mapStateToProps(state) {
  return {
    movements: state.movements,
    moves: state.newMoves,
    userCoins: state.userCoins,
    newCoins: state.newCoins,
  };
}

export default connect(mapStateToProps)(Refresh);
