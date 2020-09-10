import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import Example from "../Common/Carrousel/Carrousel";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as coinActions from "../../redux/actions/coinactions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CardMedia,
  Card,
  CardActions,
  Typography,
  CardContent,
  CardActionArea,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core/";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CreateIcon from "@material-ui/icons/Create";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from "@material-ui/core";
import "../../App.css";
import "./Landing.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Landing(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (props.movements.length === 0) {
      fetch("http://localhost:3003/coins")
        .then((response) => response.json())
        .then((data) => {
          /* let data2 = data.filter((elem) => elem.name === "Bitcoin"); */
          props.dispatch(coinActions.getCoinMovements(data));
        });
    }
  }, []);

  console.log(props);
  const classes = useStyles();
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
          <SubMenu changeValue={0} />
          <Container maxWidth="sm" className="big-container__coin-container">
            {props.movements.map((coin) => (
              <NavLink
                to={{
                  pathname: "/CoinDetail",
                  coinDetailProps: coin.name,
                }}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={coin.img}
                      title="Crypto"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {coin.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        See All features
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Coin Details
                    </Button>
                  </CardActions>
                </Card>
              </NavLink>
            ))}
            {props.movements.length === 0 && (
              <div className="no-coins">
                You have no coins, please add one or more
              </div>
            )}
          </Container>
        </Container>
      </>
    )) || <NoAuthorized />
  );
}

function mapStateToProps(state) {
  return {
    movements: state.movements,
    newCoins: state.newCoins,
  };
}

export default connect(mapStateToProps)(Landing);
