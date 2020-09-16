import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { AddMovement } from './AddMovement';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";


//  para que en todos los tests devuelva la misma respuesta
// jest.mock("@auth0/auth0-react", () => ({
//   useAuth0: () => ({user : null, isAuthenticated: null, isLoading: null})
// }));


jest.mock('@auth0/auth0-react');
jest.spyOn(console, 'error').mockImplementation(() => { });


test('Should redirect to login when user is not Authenticated', () => {
  useAuth0.mockReturnValue({ user: null, isAuthenticated: false, isLoading: false})
  const { asFragment } = render(<AddMovement userCoins={[]} />)
  expect(asFragment()).toMatchSnapshot()
  expect(screen.getByText('Log In')).toBeInTheDocument(); // existencia
  expect(screen.queryByText('Movement details')).toBeNull() // no existencia
});

test('AddMovement renders correctly', () => {
  useAuth0.mockReturnValue({ user: {email: 'foo@bar.com' }, isAuthenticated: true, isLoading: false})
  const { asFragment} = render(
    <Router>
      <AddMovement userCoins={[]} dispatch={() => { }} />
    </Router>
  )
  expect(asFragment()).toMatchSnapshot()
  expect(screen.getByText('Movement details')).toBeInTheDocument()
});

test('Should handle date selection', () => {
   useAuth0.mockReturnValue({ user: {email: 'foo@bar.com' }, isAuthenticated: true, isLoading: false})
  const selectedDate = new Date(2019, 8, 15)
  const { asFragment} = render(
    <Router>
      <AddMovement userCoins={[]} dispatch={() => { }} selectedDate={selectedDate} />
    </Router>
  )
  expect(asFragment()).toMatchSnapshot()
});



  // console.error.mockRestore();