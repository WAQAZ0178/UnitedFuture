import { univercityTypes } from "../type";
export const setUniList = (payload) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: univercityTypes.SET_LIST,
        payload: payload,
      });
    } catch (error) {
      console.error("Error fetching todo list:", error);
    }
  };
};

export const ACTIONS = {
  setUniList,
};
