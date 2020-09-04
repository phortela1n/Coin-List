import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import { Route, Switch } from "react-router-dom";
import CoinDetail from "./components/CoinDetail/CoinDetail";
import AddCoin from "./components/AddCoin/AddCoin";
import AddMovement from "./components/AddMovement/AddMovement";
import ShowProfile from "./components/ShowProfile/ShowProfile";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/CoinDetail" component={CoinDetail} />
        <Route path="/AddCoin" component={AddCoin} />
        <Route path="/AddMovement" component={AddMovement} />
        <Route path="/Profile" component={ShowProfile} />
      </Switch>
    </>
  );
}

export default App;
