import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
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
  const [value, setValue] = React.useState(0);

  console.log("the movements", props.movements);

  /*   const types = props.movements.map((movement) => <div>{movement.type}</div>); */

  return (
    <>
      <Header />
      <Container maxWidth="sm" className="big-container">
        <SubMenu />
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
        </Container>
      </Container>
    </>
  );
}

function mapStateToProps(state) {
  return {
    movements: state.movements,
  };
}

export default connect(mapStateToProps)(Landing);
