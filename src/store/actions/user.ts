import { Usertypes as userType } from "../types";
import { API } from "../../services/apiServices";
import { Dispatch } from "react";
import { SetCurrentPortfolioAction } from "../../types/redux";
export const setProfileInfo = (payload: any) => {
  return (dispatch: Dispatch<any>, getState: () => any) => {
    dispatch({
      type: userType.SET_PROFILE_INFO,
      payload,
    });
  };
};

export const setUserToken = (payload: any) => {
  return (dispatch: Dispatch<any>, getState: () => any) => {
    dispatch({
      type: userType.SET_USER_TOKENS,
      payload,
    });
  };
};

export const refreshAccessToken = (payload: any) => {
  return async (dispatch: Dispatch<any>, getState: () => any) => {
    dispatch(setUserToken(payload));
  };
};

export const setCurrentPortfolio = (payload: any) => {
  return (dispatch: Dispatch<any>, getState: () => any) => {
    dispatch({
      type: userType.SET_CURRENT_PORTFOLIO,
      payload,
    });
  };
};

export const ACTIONS = {
  setProfileInfo,
  setUserToken,
};
