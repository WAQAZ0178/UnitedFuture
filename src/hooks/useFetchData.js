import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUniList } from "../store/actions/uniList";
import { URL } from "../global/constants";
const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const uniList = useSelector((state) => state?.state?.reducer?.uniList);

  const getList = async () => {
    setLoading(true);

    try {
      const response = await axios.get(URL.baseURL, { timeout: 5000 });

      // Check if the response has data and use it
      if (response?.data) {
        setList(response.data);
        dispatch(setUniList(response.data));
      } else {
        handleNoData();
      }
    } catch (error) {
      handleNoData();
    } finally {
      setLoading(false);
    }
  };

  // Helper function to handle no data scenarios
  const handleNoData = () => {
    if (uniList?.length > 0) {
      setList(uniList);
    } else {
      setList([]);
    }
  };

  return { loading, list, getList };
};

export default useFetchData;
