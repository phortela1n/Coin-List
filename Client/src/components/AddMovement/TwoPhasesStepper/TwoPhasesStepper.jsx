import React, { useEffect } from "react";
import StepperForm from "./StepperForm/StepperForm";
import StepperCard from "./StepperCard/StepperCard";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core/";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Movement details", "Confirm Movement"];
}

export default function TwoPhasesStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <StepperForm
            selectedDate={props.selectedDate}
            handleDateChange={props.handleDateChange}
            value={props.value}
            handleChange={props.handleChange}
            quantityValues={props.quantityValues}
            handleQuantity={props.handleQuantity}
            priceValues={props.priceValues}
            handlePrice={props.handlePrice}
            cryptoMovement={props.cryptoMovement}
            handleChangeCryptoName={props.handleChangeCryptoName}
          />
        );
      case 1:
        return (
          <StepperCard
            selectedDate={props.selectedDate}
            name="Bitcoin"
            value={props.value}
            quantityValues={props.quantityValues.quantity}
            priceValues={props.priceValues.amount}
          />
        );
      default:
        return "Unknown step";
    }
  }
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className="addCoin-box--reset-status">
            <Typography className={classes.instructions}>
              <center className="green_text">
                <a href="...">{"\u2705"}</a> All right - New Move added
              </center>
            </Typography>
            <center>
              {" "}
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </center>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className="button-box">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={(e) => {
                  handleNext();
                  activeStep === steps.length - 1
                    ? props.handleMovementsClick()
                    : console.log("");
                }}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Confirm" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
