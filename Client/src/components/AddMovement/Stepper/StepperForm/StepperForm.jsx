import React from "react";
import RadioForm from "./RadioForm/RadioForm";
import CallendarForm from "./CallendarForm/CallendarForm";
import FormInput from "./FormInput/FormInput";
import DollarInput from "./DollarInput/DollarInput";
import "./StepperForm.scss";

export default function StepperForm() {
  /**
   * Radio State
   **/
  const [value, setValue] = React.useState("Buy");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  /**
   * End Radio State
   **/

  /**
   * Callendar State
   **/
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  /**
   * End Callendar State
   **/

  /**
   * Inputs State
   **/

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
   * End Inputs State
   **/

  return (
    <div className="add-movements__form-box">
      <CallendarForm
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <div className="add-movements__form-box--radio">
        <RadioForm value={value} handleChange={handleChange} />
      </div>
      <div className="form-input-box">
        <FormInput
          name="Quantity"
          values={quantityValues}
          handleQuantity={handleQuantity}
        />
        <DollarInput priceValues={priceValues} handlePrice={handlePrice} />
      </div>
    </div>
  );
}
