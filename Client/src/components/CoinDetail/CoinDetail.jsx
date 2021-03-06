import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../Common/Header/Header";
import BackMenu from "../Common/BackMenu/BackMenu";
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
import "./CoinDetail.scss";

const StyledTableCell = withStyles((theme) => ({
  head: {
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
  const properCoin = props.userCoins.find(
    (elem) => elem.name === props.location.coinDetailProps
  );
  return (
    <>
      <Header />
      <Container maxWidth="sm" className="big-container-detail">
        <BackMenu />
        <TableContainer
          component={Paper}
          className="big-container-detail__table"
        >
          <Table aria-label="customized table" className="coin-detail-table">
            <TableHead className="coin-detail-table__header">
              <TableRow>
                <StyledTableCell>
                  List of Movements (
                  {props.location && props.location.coinDetailProps})
                </StyledTableCell>
                <StyledTableCell align="left">Quantity</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(properCoin &&
                properCoin.moves.length > 0 &&
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
                    {
                      <StyledTableCell align="right">
                        {row.date || "No date"}
                      </StyledTableCell>
                    }
                    {/*<StyledTableCell align="left">{row.price}</StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell> */}
                  </StyledTableRow>
                ))) || (
                <StyledTableRow key={"unique"}>
                  No {props.location.coinDetailProps} Movements
                </StyledTableRow>
              )}
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
    userCoins: state.userCoins,
  };
}

export default connect(mapStateToProps)(CoinDetail);
