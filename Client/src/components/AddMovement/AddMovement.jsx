import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import TwoPhasesStepper from "./TwoPhasesStepper/TwoPhasesStepper";
import { useAuth0 } from "@auth0/auth0-react";
import * as coinActions from "../../redux/actions/coinactions";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { Container } from "@material-ui/core/";
import { CircularProgress } from "@material-ui/core";

function AddMovement(props) {
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (props.movements.length === 0) {
      fetch("http://localhost:3003/coins")
        .then((response) => response.json())
        .then((data) => {
          /* let data2 = data.filter((elem) => elem.name === "Bitcoin"); */
          props.dispatch(coinActions.getCoinMovements(data));
        });
    }
  }, []);

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
  const [cryptoMovement, setcryptoMovement] = React.useState("Ten");

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
    console.log(selectedDate);
    let newMovement = {
      type: OperationType,
      buyPrice: priceValues.amount,
      quantity: quantityValues.quantity,
      date: selectedDate.toISOString().substring(0, 10),
    };
    console.log(newMovement);
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
    newCoins: state.newCoins,
  };
}

export default connect(mapStateToProps)(AddMovement);
