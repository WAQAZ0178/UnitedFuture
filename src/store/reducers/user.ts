import { ReducAction, UserState } from "../../types/redux";
import { Usertypes as types } from "../types";

const initialState: UserState = {
  profileInfo: null,
  userToken: null,
};

const userReducer = (
  state: UserState = initialState,
  action: ReducAction
): UserState => {
  switch (action.type) {
    case types.SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.payload,
      };

    case types.SET_USER_TOKENS:
      return {
        ...state,
        userToken: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
