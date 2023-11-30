import { v4 } from "uuid";
import { ALERT_TYPES } from "./alert.types";

export const setAlert = (msg, alertTypes) => (dispatch) => {
  const id = v4();
  dispatch({
    type: ALERT_TYPES.SET_ALERT,
    payload: { msg, alertTypes, id },
  });

  setTimeout(() => {
    dispatch({ type: ALERT_TYPES.REMOVE_ALERT, payload: id });
  }, 5000);
};
