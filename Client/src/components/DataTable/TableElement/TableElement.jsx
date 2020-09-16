import React from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { deleteSingleMovement } from "../../../redux/actions/deleteSingleMovement";
import "./TableElement.scss";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function TableElement(props) {
  const { user } = useAuth0();
  let start = [];
  props.userCoins.map((elem) => {
    elem.moves.map((item) => {
      let newObject = {};
      newObject.name = elem.name;
      newObject.quantity = item.quantity;
      newObject.price = item.buyPrice;
      newObject.date = item.date;
      newObject.type = item.type;
      newObject.movementID = item.movementID;
      start.push(newObject);
      return newObject;
    });
    return null;
  });

  console.log("start->", start);
  console.log("User coins here->", props.userCoins);
  const [state, setState] = React.useState({
    columns: [
      { title: "Coin Name", field: "name" },
      { title: "Type", field: "type" },
      { title: "Price €", field: "price", type: "numeric" },
      { title: "Quantity", field: "quantity", type: "numeric" },
      { title: "Date", field: "date", type: "numeric" },
    ],
    data: start,
  });

  return (
    <MaterialTable
      icons={tableIcons}
      title="Data Centre  "
      columns={state.columns}
      data={state.data}
      editable={{
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              const userID = user.email || user.sub;
              console.log("in delete", oldData, userID);
              const { movementID, name } = oldData;
              props
                .dispatch(deleteSingleMovement(userID, name, movementID))
                .then(() => {
                  resolve();
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                });
            }, 600);
          }),
      }}
    />
  );
}

export default connect()(TableElement);
