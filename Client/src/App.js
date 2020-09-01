import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing.jsx";
import { Route, Switch } from "react-router-dom";
import CoinDetail from "./components/CoinDetail/CoinDetail";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/CoinDetail" component={CoinDetail} />
      </Switch>
    </>
  );
}

export default App;
