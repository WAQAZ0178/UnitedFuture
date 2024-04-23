import { TodoTypes } from "../types";

const initialState = {
  todolist: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoTypes.SET_TODOLIST:
      return {
        ...state,
        todolist: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
