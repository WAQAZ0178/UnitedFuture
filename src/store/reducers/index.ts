import { combineReducers } from "redux";
import userReducer from "./user";
import symbolReducer from "./symbols";
import portfolioReducer from "./portfolio";
import todoReducer from "./todoReducer";
const appReducer = combineReducers({
  userReducer,
  symbolReducer,
  portfolioReducer,
  todoReducer,
});

export default appReducer;
