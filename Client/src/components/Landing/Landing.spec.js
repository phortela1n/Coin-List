import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Landing, { mapStateToProps } from "./Landing";

let list;
beforeEach(() => {
  list = fetch("http://localhost:3002/movements")
    .then((response) => response.json())
    .then((data) => {
      console.log(Landing);
      props.dispatch(coinActions.getCoinMovements(data));
    });
});
describe("App", () => {
  it("should do a proper fetch connection", () => {
    const state = { list: list, error: null };
    expect(state).toBeDefined();
  });
});
