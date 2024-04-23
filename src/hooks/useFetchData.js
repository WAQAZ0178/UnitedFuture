import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setTodoList } from "../store/actions/todo";
const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const getList = async () => {
    setLoading(true);
    try {
      let res = await axios.get("https://dummyjson.com/todos");
      if (res.data?.todos) {
        setList(res.data.todos);
        dispatch(setTodoList(res.data.todos));
      } else {
        setList([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return { loading, list, getList };
};

export default useFetchData;
