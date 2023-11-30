import { ALERT_TYPES } from "./alert.types";

export const ALERT_INITIAL_STATE = [];

export const alertReducer = (state = ALERT_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALERT_TYPES.SET_ALERT:
      return [...state, payload];
    case ALERT_TYPES.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
