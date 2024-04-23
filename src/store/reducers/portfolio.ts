import { ReducAction, portfolioState } from "../../types/redux";
import { portfolioTypes as types } from "../types";

const initialState: portfolioState = {
  currentPortfolio: {},
  allPortfolio: [],
};

const portfolioReducer = (
  state: portfolioState = initialState,
  action: ReducAction
): portfolioState => {
  switch (action.type) {
    case types.SET_ALL_PORTFOLIO:
      return {
        ...state,
        allPortfolio: action.payload,
      };

    case types.SET_CURRENT_PORTFOLIO:
      return {
        ...state,
        currentPortfolio: action.payload,
      };

    default:
      return state;
  }
};

export default portfolioReducer;
