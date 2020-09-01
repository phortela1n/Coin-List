import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import Header from "../Common/Header.jsx";
import CoinDetail from "../CoinDetail/CoinDetail.jsx";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as coinActions from "../../redux/actions/coinactions";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardMedia,
  Card,
  CardActions,
  Typography,
  CardContent,
  CardActionArea,
  Paper,
} from "@material-ui/core/";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Landing(props) {
  const [coinDetailList, setcoinDetailList] = useState([]);

  useEffect(() => {
    props.dispatch(coinActions.getCoinMovements(coinDetailList));
  }, [coinDetailList]);

  const classes = useStyles();
  return (
    <>
      <Header />
      <NavLink
        to={{
          pathname: "/CoinDetail",
          coinDetailProps: "Bitcoin",
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://img2.freepng.es/20171220/bhe/bitcoin-png-5a3a2702388611.73714972151376051423153857.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                BitCoin
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
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
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    movements: state.movements,
  };
}

export default connect(mapStateToProps)(Landing);
