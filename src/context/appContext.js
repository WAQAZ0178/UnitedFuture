import React, { createContext, useReducer, useContext } from "react";
const initialState = {
  todos: [],
  loading: false,
  error: null,
  userList: [
    {
      email: "waqas123@gmail.com",
      password: "1234",
    },
    {
      email: "waqas@gmail.com",
      password: "1234",
    },
  ],
};

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, todos: action.payload, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
