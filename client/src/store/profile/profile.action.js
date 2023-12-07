import axios from "axios";

import { setAlert } from "../alert/alert.action";
import { PROFILE_TYPES } from "./profile.types";
import { Navigate } from "react-router-dom";

//Get current users profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("api/profile/me");
    dispatch({
      type: PROFILE_TYPES.GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_TYPES.PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

//create or update profile

export const createProfile =
  (formData, edit = false) =>
  async (dispatch) => {

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
   
    try {
      
      const res = await axios.post("api/profile", formData, config);
      dispatch({
        type: PROFILE_TYPES.GET_PROFILE,
        payload: res.data,
      });

      dispatch(setAlert(edit ? "Profile updated" : "Profile Created"));
      if (!edit) {
        return <Navigate tp="/dashboard" />;
      }
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_TYPES.PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };
