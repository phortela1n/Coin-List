import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TwoPhasesStepper from "./TwoPhasesStepper/TwoPhasesStepper";
import { useAuth0 } from "@auth0/auth0-react";
import * as addMovesactions from "../../redux/actions/addMovesactions";
import * as getUserCoinsactions from "../../redux/actions/getUserCoinsactions";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { Container } from "@material-ui/core/";
import { CircularProgress } from "@material-ui/core";


function AddMovement(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userCoins, setUserCoins] = useState([]);

  useEffect(() => {
    if (props.userCoins.length === 0) {
      if (user) {
        console.log(user);
        props.dispatch(getUserCoinsactions.getCoins(user.email || user.sub));
      }

      //  Fetch call to localhost/3003/coins, get all the coins

    }
  }, [user]);
  useEffect(() => {
    if (props.userCoins.length) {
      let newArray = props.userCoins.map((item) => item.name);
      setUserCoins(newArray);
      debugger;
    }
  }, [props.userCoins]);

  /**
   * FORM STATE
   **/

  // Radio State
  const [OperationType, setOperationType] = React.useState("Buy");
  const handleChange = (event) => {
    setOperationType(event.target.value);
  };

  // Callendar State
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //Inputs State

  //NAME
  const [cryptoMovement, setcryptoMovement] = React.useState("Bitcoin");

  const handleChangeCryptoName = (event) => {
    setcryptoMovement(event.target.value);
  };

  //QUANTITY

  const [quantityValues, setquantityValues] = React.useState({
    quantity: "",
  });

  const handleQuantity = (prop) => (event) => {
    setquantityValues({ ...quantityValues, [prop]: event.target.value });
  };

  //PRICE

  const [priceValues, setpriceValues] = React.useState({
    amount: "",
  });

  const handlePrice = (prop) => (event) => {
    setpriceValues({ ...priceValues, [prop]: event.target.value });
  };

  /**
   * END FORM STATE
   **/

  /*
   **Handle Click confirm form
   */
  function handleMovementsClick() {
    /* console.log(selectedDate); */
    let selectedCrypto = cryptoMovement;
    let newMovement = {
      type: OperationType,
      buyPrice: priceValues.amount,
      quantity: quantityValues.quantity,
      date: selectedDate.toISOString().substring(0, 10),
    };
    /* console.log(newMovement, selectedCrypto); */
    props.dispatch(
      addMovesactions.addMoves(
        selectedCrypto,
        newMovement,
        user.email || user.sub
      )
    );
  }

  if (isLoading) {
    return (
      <center>
        <>
          <CircularProgress className="loadcircle" color="secondary" />
        </>
      </center>
    );
  }
  return (
    (isAuthenticated && (
      <>
        <Header />
        <Container
          maxWidth="sm"
          className="big-container big-container--addCoin"
        >
          <SubMenu changeValue={2} />
          <Container
            maxWidth="sm"
            className="big-container__coin-container big-container__movements"
          >
            <TwoPhasesStepper
              selectedDate={selectedDate.toISOString().substring(0, 10)}
              handleDateChange={handleDateChange}
              value={OperationType}
              handleChange={handleChange}
              quantityValues={quantityValues}
              handleQuantity={handleQuantity}
              priceValues={priceValues}
              handlePrice={handlePrice}
              handleMovementsClick={handleMovementsClick}
              cryptoMovement={cryptoMovement}
              handleChangeCryptoName={handleChangeCryptoName}
            />
          </Container>
        </Container>
      </>
    )) || <NoAuthorized />
  );
}

function mapStateToProps(state) {
  return {
    movements: state.movements,
    moves: state.newMoves,
    userCoins: state.userCoins,
    newCoins: state.newCoins,
  };
}

export default connect(mapStateToProps)(AddMovement);
