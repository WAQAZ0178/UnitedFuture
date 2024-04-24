import { TodoTypes } from "../types";
import axios from "axios";

export const setTodoList = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("https://dummyjson.com/todos");
      const todoList = response.data.todos; 

      dispatch({
        type: TodoTypes.SET_TODOLIST,
        payload: todoList,
      });
    } catch (error) {
      console.error("Error fetching todo list:", error);
    }
  };
};

export const ACTIONS = {
  setTodoList,
};
