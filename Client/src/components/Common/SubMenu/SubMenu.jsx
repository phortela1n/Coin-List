import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import "./SubMenu.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function SubMenu(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  /* console.log(props.location.pathname); */
  return (
    <>
      <BottomNavigation
        className="big-container__sub-menu"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Your Coins"
          icon={<CreateIcon />}
          component={NavLink}
          to="/"
        />
        <BottomNavigationAction
          component={NavLink}
          to="/AddCoin"
          label="Add Coin"
          icon={<AddCircleOutlineIcon />}
        />
        <BottomNavigationAction
          component={NavLink}
          to="/AddMovement"
          className="big-container__sub-menu--third"
          label="Add Movement"
          icon={<CreateIcon />}
        />
      </BottomNavigation>
    </>
  );
}

export default SubMenu;
