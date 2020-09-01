import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import CoinDetail from "../CoinDetail/CoinDetail.jsx";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as coinActions from "../../redux/actions/coinactions";

function Landing(props) {
  const [coinDetailList, setcoinDetailList] = useState([]);

  useEffect(() => {
    props.dispatch(coinActions.getCoinMovements(coinDetailList));
  }, [coinDetailList]);

  return (
    <>
      <Button color="primary">Hello World</Button>
      <NavLink
        to={{
          pathname: "/CoinDetail",
          coinDetailProps: "bitcoin",
        }}
      >
        Details
      </NavLink>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    movements: state.movements,
  };
}

export default connect(mapStateToProps)(Landing);
