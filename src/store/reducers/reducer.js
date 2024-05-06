import { univercityTypes } from "../type";
const initialState = {
  uniList: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case univercityTypes.SET_LIST:
      return {
        ...state,
        uniList: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
