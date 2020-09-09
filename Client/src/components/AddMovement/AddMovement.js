import React, { useEffect } from "react";
import clsx from "clsx";
import Header from "../Common/Header/Header";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import SubMenu from "../Common/SubMenu/SubMenu";
import { connect } from "react-redux";
/* import * as AddMovementsActions from "../../redux/actions/AddMovementsactions"; */
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
  TextField,
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
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import "./AddMovement.css";

//Styling Material Components
const useStyles = makeStyles((theme) => ({
  rootList: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  root3: {
    minWidth: 275,
  },
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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

/*STEPPER FUNCTIONS */
function getSteps() {
  return ["Select Coin", "Select Type", "Add Details "];
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
  "Bitcoin",
  "Ethereum",
  "Litecoin",
  "Swipe",
  "BNB",
  "Monero",
  "XRP",
  "MIOTA",
];

function getStyles(name, cryptoName, theme) {
  return {
    fontWeight:
      cryptoName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

/* END SELECT CONST & FUNCTIONS */
/*CARD FUNCTIONS*/

/*END CARD FUNCTIONS*/

function AddMovement(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  /* useEffect(() => {}, []); */

  const classes = useStyles();
  const timer = React.useRef();
  const steps = getSteps();
  const bull = <span className={classes.bullet}>•</span>;

  /*HANDLE CLICK*/
  function handleClick() {
    /* props.dispatch({
      type: "INCREMENT",
    }); */
    if (cryptoName.length > 0) {
      console.log("pulsaste");
      /* props.dispatch(AddMovementsActions.AddMovements(cryptoName)); */
      setcryptoName([]);
    }
  }

  /*STEPPER FUNCTIONS */
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <section className="AddMovement-box">
            <p className="AddMovement-box__title">
              "Select one crypto from the List..."
            </p>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Crypto</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={whatCrypto}
                onChange={handleChangeSingle}
              >
                <MenuItem value={"Bitcoin"}>Bitcoin</MenuItem>
                <MenuItem value={"Ethrereum"}>Ethereum</MenuItem>
                <MenuItem value={"Litecoin"}>Litecoin</MenuItem>
              </Select>
            </FormControl>
          </section>
        );
      case 1:
        return (
          <>
            <Card>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                ></Typography>
                <List className={classes.rootList} subheader={<li />}>
                  {[0].map((sectionId) => (
                    <li
                      key={`section-${sectionId}`}
                      className={classes.listSection}
                    >
                      <ul className={classes.ul}>
                        <ListSubheader>{`Details`}</ListSubheader>
                        <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">
                            Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleType}
                          >
                            <MenuItem value={"Buy"}>Buy</MenuItem>
                            <MenuItem value={"Sell"}>Sell</MenuItem>
                          </Select>
                          <TextField
                            id="standard-number"
                            label="Quantity"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </FormControl>
                      </ul>
                    </li>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          </>
        );
      case 2:
        return <div>Add more Details</div>;
      default:
        return "Unknown step";
    }
  }
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
  const [cryptoName, setcryptoName] = React.useState([]);

  const handleChange = (event) => {
    setcryptoName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setcryptoName(value);
  };
  /*SELECT CONST & FUNCTIONS */
  /*SINGLE SELECT FUNCTIONS*/
  /*FIRST STEP*/
  const [whatCrypto, setwhatCrypto] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleChangeSingle = (event) => {
    setwhatCrypto(event.target.value);
  };
  const handleType = (event) => {
    setAge(event.target.value);
  };
  /*SECOND STEP*/
  /*END SINGLE SELECT FUNCTIONS*/
  return (
    (isAuthenticated && (
      <>
        <Header />
        <Container
          maxWidth="sm"
          className="big-container big-container--AddMovement"
        >
          <SubMenu changeValue={2} />
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
                  <div className="AddMovement-box--reset-status">
                    <Typography className={classes.instructions}>
                      <center className="green_text">
                        <a href="...">{"\u2705"}</a> All right - New Movements
                        added
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
                        className={classes.button}
                      >
                        Back
                      </Button>

                      <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => {
                          handleNext();
                          activeStep === steps.length - 1
                            ? handleClick()
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
          </Container>
        </Container>
      </>
    )) || <NoAuthorized />
  );
}

export default AddMovement;
