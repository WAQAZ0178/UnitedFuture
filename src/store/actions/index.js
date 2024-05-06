import types from "../types";
const setProfileInfo = (payload) => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SET_PROFILE_INFO,
      payload,
    });
  };
};

export const ACTIONS = {
  setProfileInfo,
};
