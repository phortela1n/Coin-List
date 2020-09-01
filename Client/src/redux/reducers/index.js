import { combineReducers } from "redux";
import movements from "./coinDetailReducer";

const rootReducer = combineReducers({
  movements: movements,
});

export default rootReducer;
