// Define the state type
export interface UserState {
  profileInfo: any | null; // Replace 'any' with the actual type of profileInfo
  userToken: any | null; // Replace 'any' with the actual type of userToken
}

export interface portfolioState {
  currentPortfolio: any | null; // Replace 'any' with the actual type of profileInfo
  allPortfolio: any | null; // Replace 'any' with the actual type of userToken
}

// Define the action type
export type UserAction = {
  type: string;
  payload: any; // Replace 'any' with the actual type of payload
};

export type StockState = {
  stocks: any | null;
  commodity: any | null;
  forex: any | null;
  mutualFund: any | null;
  todolist: any | null;
};

export type StockAction = {
  type: string;
  payload: any; // Replace 'any' with the actual type of payload
};

export type ReducAction = {
  type: string;
  payload: any; // Replace 'any' with the actual type of payload
};

export type SetCurrentPortfolioAction = {
  type: string; // Replace with your actual action type
  payload: any;
};
