import { combineReducers } from "redux";
import { alertReducer } from "./alert/alert.reducer";

const rootreducer = combineReducers({
  alert: alertReducer,
});

export default rootreducer;
