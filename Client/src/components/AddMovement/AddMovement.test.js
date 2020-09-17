import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddMovement from "./AddMovement";
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
  movements: [],
  newCoins: [],
  moves: [],
  userCoins: [],
});

test("Should redirect to login when user is not Authenticated", () => {
  useAuth0.mockReturnValue({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });
  const { asFragment } = render(
    <ReduxProvider store={store}>
      <AddMovement userCoins={[]} />
    </ReduxProvider>
  );

  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByText("Log In")).toBeInTheDocument(); // exists
  expect(screen.queryByText("Movement details")).toBeNull(); // !exists
});

test("AddMovement renders correctly", () => {
  useAuth0.mockReturnValue({
    user: { email: "foo@bar.com" },
    isAuthenticated: true,
    isLoading: false,
  });
  const { asFragment } = render(
    <ReduxProvider store={store}>
      <Router>
        <AddMovement />
      </Router>
    </ReduxProvider>
  );
  expect(asFragment()).toMatchSnapshot();
  expect(screen.getByText("Movement details")).toBeInTheDocument();
});

test("Should handle date selection", () => {
  useAuth0.mockReturnValue({
    user: { email: "foo@bar.com" },
    isAuthenticated: true,
    isLoading: false,
  });
  const selectedDate = new Date(2019, 8, 15);
  const { asFragment } = render(
    <ReduxProvider store={store}>
      <Router>
        <AddMovement selectedDate={selectedDate} />
      </Router>
    </ReduxProvider>
  );
  expect(asFragment()).toMatchSnapshot();
  console.error.mockRestore();
});
