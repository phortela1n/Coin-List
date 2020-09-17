import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddCoin from "./AddCoin";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider as ReduxProvider } from "react-redux";
import thunk from "redux-thunk";

jest.mock("@auth0/auth0-react");
jest.spyOn(console, "error").mockImplementation(() => {});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
  newCoins: [],
});

test("Should redirect to login when user is not Authenticated", () => {
  useAuth0.mockReturnValue({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });
  const { asFragment } = render(
    <ReduxProvider store={store}>
      <AddCoin newCoins={[]} />
    </ReduxProvider>
  );

  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByText("Log In")).toBeInTheDocument();
  expect(screen.queryByText("Coin")).toBeNull();
});

test("AddCoin renders correctly", () => {
  useAuth0.mockReturnValue({
    user: { email: "foo@bar.com" },
    isAuthenticated: true,
    isLoading: false,
  });
  const { asFragment } = render(
    <ReduxProvider store={store}>
      <Router>
        <AddCoin />
      </Router>
    </ReduxProvider>
  );
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByText("Coin")).toBeInTheDocument();
});
