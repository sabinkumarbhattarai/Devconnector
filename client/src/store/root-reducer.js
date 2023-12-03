import { combineReducers } from "redux";
import { alertReducer } from "./alert/alert.reducer";
import { authReducer } from "./auth/auth.reducer";
import { profileReducer } from "./profile/profile.reducer";

const rootreducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: profileReducer,
});

export default rootreducer;
