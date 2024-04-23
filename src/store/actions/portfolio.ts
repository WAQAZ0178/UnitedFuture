import { portfolioTypes } from "../types";

import { Dispatch } from "react";
export const setAllPortfolio = (payload: any) => {
  return (dispatch: Dispatch<any>, getState: () => any) => {
    dispatch({
      type: portfolioTypes.SET_ALL_PORTFOLIO,
      payload,
    });
  };
};

export const setCurrentPortfolio = (payload: any) => {
  return (dispatch: Dispatch<any>, getState: () => any) => {
    dispatch({
      type: portfolioTypes.SET_CURRENT_PORTFOLIO,
      payload,
    });
  };
};

export const ACTIONS = {
  setCurrentPortfolio,
  setAllPortfolio,
};
