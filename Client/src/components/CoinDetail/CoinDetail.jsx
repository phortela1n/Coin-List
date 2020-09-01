import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Header from "../Common/Header.jsx";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core/";
import { connect } from "react-redux";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, price) {
  return { name, price };
}

const rows = [
  createData("Buy", 159, 6.0, 24, 4.0),
  createData("Sell", 237, 9.0, 37, 4.3),
  createData("Change", 262, 16.0, 24, 6.0),
];

function CoinDetail(props) {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  List of Movements (
                  {props.location && props.location.coinDetailProps})
                </StyledTableCell>
                <StyledTableCell align="left">From</StyledTableCell>
                <StyledTableCell align="right">To</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

function mapStateToProps(state) {
  return {
    movements: state.movements,
  };
}

export default connect(mapStateToProps)(CoinDetail);
