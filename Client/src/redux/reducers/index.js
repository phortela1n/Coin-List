import { combineReducers } from "redux";
import movements from "./coinDetailReducer";

const rootReducer = combineReducers({
  movements,
});

export default rootReducer;
