import React from "react";
import TwoPhasesStepper from "./TwoPhasesStepper/TwoPhasesStepper";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Common/Header/Header";
import SubMenu from "../Common/SubMenu/SubMenu";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { Container } from "@material-ui/core/";
import { CircularProgress } from "@material-ui/core";

export default function AddMovement() {
  const { isAuthenticated, isLoading } = useAuth0();

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
            />
          </Container>
        </Container>
      </>
    )) || <NoAuthorized />
  );
}
