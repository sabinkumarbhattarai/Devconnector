import axios from "axios";

import { setAlert } from "../alert/alert.action";
import { AUTH_TYPES } from "./auth.types";
import setAuthToken from "../../utils/setAuthtoken";

//Load user

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: AUTH_TYPES.USER_lOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_TYPES.AUTH_ERROR,
    });
  }
};

//register user

export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });

    try {
      const res = await axios.post("/api/users", body, config);

      dispatch({
        type: AUTH_TYPES.REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: AUTH_TYPES.REGISTER_FAIL,
      });
    }
  };

//login user

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    try {
      const res = await axios.post("/api/auth", body, config);

      dispatch({
        type: AUTH_TYPES.LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({
        type: AUTH_TYPES.LOGIN_FAILURE,
      });
    }
  };

//logout

export const logout = () => (dispatch) => {
  dispatch({
    type: AUTH_TYPES.LOGOUT,
  });
};
