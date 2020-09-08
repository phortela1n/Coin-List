import { combineReducers } from "redux";
import movements from "./coinDetailReducer";
import newCoins from "./addCoinReducer";

const rootReducer = combineReducers({
  movements,
  newCoins,
});

export default rootReducer;
