import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Header from "../Common/Header.jsx";
import CoinDetail from "../CoinDetail/CoinDetail.jsx";
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
  Paper,
} from "@material-ui/core/";
import "../../App.css";
import "./Landing.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Landing(props) {
  useEffect(() => {
    if (props.movements.length === 0) {
      fetch("http://localhost:3002/movements")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          props.dispatch(coinActions.getCoinMovements(data));
        });
    }
  }, []);

  const classes = useStyles();

  console.log("the movements", props.movements);

  /*   const types = props.movements.map((movement) => <div>{movement.type}</div>); */

  return (
    <>
      <Header />
      <Container maxWidth="sm" className="big-container">
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
        <NavLink
          to={{
            pathname: "/CoinDetail",
            coinDetailProps: "Bitcoin",
          }}
        ></NavLink>
      </Container>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    movements: state.movements,
  };
}

export default connect(mapStateToProps)(Landing);
