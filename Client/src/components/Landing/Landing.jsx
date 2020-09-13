import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as coinActions from "../../redux/actions/coinactions";
import refreshList from "../../api/refreshList";
import * as getUserCoinsactions from "../../redux/actions/getUserCoinsactions";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CardMedia,
  Card,
  CardActions,
  Typography,
  CardContent,
  CardActionArea,
} from "@material-ui/core/";
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

/* let newUser; */

function Landing(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    if (user) {
      console.log(user);
      props.dispatch(getUserCoinsactions.getCoins(user.email || user.sub));
    }
  }, [user]);
  useEffect(() => {
    if (props.userCoins.length === 0) {
      //  Fetch call to localhost/3003/coins, get all the coins
      refreshList(props, coinActions);
    }
  }, []);
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
  console.log("userCoins", props.userCoins);
  return (
    (isAuthenticated && (
      <>
        <Header />
        <Container maxWidth="sm" className="big-container">
          <SubMenu changeValue={0} />
          <Container maxWidth="sm" className="big-container__coin-container">
            {props.userCoins.map((coin) => (
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

            {props.userCoins.length === 0 && (
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
    userCoins: state.userCoins,
    wholeState: state,
    newCoins: state.newCoins,
  };
}

export default connect(mapStateToProps)(Landing);
