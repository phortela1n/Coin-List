import React from "react";
import clsx from "clsx";
import Header from "../Common/Header/Header";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import SubMenu from "../Common/SubMenu/SubMenu";
import { Container } from "@material-ui/core/";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
/* import CircularProgress from "@material-ui/core/CircularProgress"; */
import { green } from "@material-ui/core/colors";
/* import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save"; */
/*STEPPER IMPORTS*/
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
/*END STEPPER IMPORTS*/
/*SELECT IMPORTS*/
import { useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
/*END SELECT IMPORTS*/

const useStyles = makeStyles((theme) => ({
  root2: {
    width: "100%",
  },
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: "absolute",
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

/*STEPPER FUNCTIONS */
function getSteps() {
  return ["Add New Coin", "Check Coin"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          "Select one or more coins from the List..."
          <Button>Mira</Button>
        </>
      );
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}
/*END STEPPER FUNCTIONS */
/* SELECT CONST & FUNCTIONS */
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

/* END SELECT CONST & FUNCTIONS */

function AddCoin() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const classes = useStyles();
  const timer = React.useRef();
  const steps = getSteps();

  /*STEPPER FUNCTIONS */
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

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 1000);
    }
  };
  /*END STEPPER FUNCTIONS */
  /*SELECT CONST & FUNCTIONS */
  /* const classes = useStyles(); */
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };
  /*SELECT CONST & FUNCTIONS */

  return (
    (isAuthenticated && (
      <>
        <Header />
        <Container maxWidth="sm" className="big-container">
          <SubMenu />
          <Container maxWidth="sm" className="big-container__coin-container">
            {/* Save Button -> <div className={classes.root}>
              <div className={classes.wrapper}>
                <Fab
                  aria-label="save"
                  color="primary"
                  className={buttonClassname}
                  onClick={handleButtonClick}
                >
                  {success ? <CheckIcon /> : <SaveIcon />}
                </Fab>
                {loading && (
                  <CircularProgress size={68} className={classes.fabProgress} />
                )}
              </div>
            </div> */}
            <div className={classes.root2}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All right - New Coin added
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                      Reset
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>
                      {getStepContent(activeStep)}
                    </Typography>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Container>
        </Container>
      </>
    )) || <NoAuthorized />
  );
}

export default AddCoin;
