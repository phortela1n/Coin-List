import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Card,
  CardActions,
  CardContent,
  Select,
  Checkbox,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core/";
import RadioForm from "./RadioForm/RadioForm";
import CallendarForm from "./CallendarForm/CallendarForm";

export default function StepperForm() {
  //Radio Buttons
  const [value, setValue] = React.useState("Buy");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  //End Radio Buttons

  return (
    <>
      {/* <CallendarForm /> */}
      <RadioForm value={value} handleChange={handleChange} />
    </>
  );
}
