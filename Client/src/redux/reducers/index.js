import { combineReducers } from "redux";
import movements from "./coinDetailReducer";
import newCoins from "./addCoinReducer";
import moves from "./addMoveReducer";

const rootReducer = combineReducers({
  movements,
  newCoins,
  moves,
});

export default rootReducer;
