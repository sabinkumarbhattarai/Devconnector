import { PROFILE_TYPES } from "./profile.types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export const profileReducer = (state=initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROFILE_TYPES.GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_TYPES.PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
