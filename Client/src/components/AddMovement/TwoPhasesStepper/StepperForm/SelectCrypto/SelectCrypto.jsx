import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SelectCrypto(props) {
  const classes = useStyles();

  const menuItems = props.userCoins
    .map((item) => item.name)
    .map((userCoin) => <MenuItem value={userCoin}>{userCoin}</MenuItem>);

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Crypto</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.cryptoMovement}
          onChange={props.handleChangeCryptoName}
        >
          {menuItems}
        </Select>
      </FormControl>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    userCoins: state.userCoins,
  };
}

export default connect(mapStateToProps)(SelectCrypto);
