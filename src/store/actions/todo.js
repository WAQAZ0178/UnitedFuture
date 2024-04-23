// import { TodoTypes } from "../types";
// export const setTodoList = (payload) => {
//   return (dispatch, getState) => {
//     dispatch({
//       type: TodoTypes.SET_TODOLIST,
//       payload,
//     });
//   };
// };

// export const ACTIONS = {
//   setTodoList,
// };
import { TodoTypes } from "../types";
import axios from "axios";

export const setTodoList = () => {
  return async (dispatch, getState) => {
    try {
      // Assuming your API endpoint is "https://dummyjson.com/todos"
      const response = await axios.get("https://dummyjson.com/todos");
      const todoList = response.data.todos; // Extract todos from the response

      dispatch({
        type: TodoTypes.SET_TODOLIST,
        payload: todoList,
      });
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching todo list:", error);
    }
  };
};

export const ACTIONS = {
  setTodoList,
};
