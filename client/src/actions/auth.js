import axios from "axios";
import { setAlert } from "./alert";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./type";

//Register user
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post("http://localhost:3005/api/v1/users", body, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "danger"));
        });
      }

      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
