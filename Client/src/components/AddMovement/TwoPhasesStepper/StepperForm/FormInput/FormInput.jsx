import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

//Styles
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormInput(props) {
  const [value, setValue] = useState(props.values.amount);
  const classes = useStyles();

  function handleQuantity(event) {
    const { value } = event.target;
    if (value < props.minimum) {
      setValue(0);
    }
    props.handleQuantity("quantity")(event);
  }

  const type = props.type || "text";
  return (
    <>
      <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">
          {props.name}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={value}
          type={type}
          onChange={handleQuantity}
          startAdornment={<InputAdornment position="start">✏</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
    </>
  );
}
