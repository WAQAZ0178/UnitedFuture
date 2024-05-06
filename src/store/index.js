import {
  Middleware,
  combineReducers,
  compose,
  createStore,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: 0,
};
const rootReducer = combineReducers({
  state: appReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
