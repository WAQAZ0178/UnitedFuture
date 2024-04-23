import { StockState, ReducAction } from "../../types/redux";
import { symbolTypes as types } from "../types";

const initialState: StockState = {
  stocks: [],
  commodity: [],
  forex: [],
  mutualFund: [],
  todolist: [],
};

const symbolReducer = (
  state: StockState = initialState,
  action: ReducAction
): StockState => {
  switch (action.type) {
    case types.SET_COMMODITY:
      return {
        ...state,
        commodity: action.payload,
      };

    case types.SET_FOREX:
      return {
        ...state,
        forex: action.payload,
      };

    case types.SET_MUTUAL_FUND:
      return {
        ...state,
        mutualFund: action.payload,
      };

    case types.SET_STOCK:
      return {
        ...state,
        stocks: action.payload,
      };

    case types.SET_TODOLIST:
      return {
        ...state,
        todolist: action.payload,
      };

    default:
      return state;
  }
};

export default symbolReducer;
