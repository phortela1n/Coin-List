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
import "../../App.css";
import "./CoinDetail.css";

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

function CoinDetail(props) {
  const properCoin = props.movements.find(
    (elem) => elem.name === props.location.coinDetailProps
  );
  console.log(properCoin);
  return (
    <>
      <Header />
      <Container maxWidth="sm" className="big-container-detail">
        <TableContainer
          component={Paper}
          className="big-container-detail__table"
        >
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  List of Movements (
                  {props.location && props.location.coinDetailProps})
                </StyledTableCell>
                <StyledTableCell align="left">Quantity</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {properCoin &&
                properCoin.moves.map((row) => (
                  <StyledTableRow key={row.type}>
                    <StyledTableCell component="th" scope="row">
                      {row.type}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.quantity || row.sellPrice}
                    </StyledTableCell>
                    {
                      <StyledTableCell align="right">
                        {row.buyPrice || row.sellPrice}€
                      </StyledTableCell>
                    }
                    {/*<StyledTableCell align="left">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell> */}
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
