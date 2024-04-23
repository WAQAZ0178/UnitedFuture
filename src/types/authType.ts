export interface LoginStateProps {
  profileInfo?: any; // Replace 'any' with the actual type of profileInfo
  userToken?: any;
}

export interface LoginDispatchProps {
  setProfileInfo: (payload: any) => void; // Replace 'any' with the actual type of payload
  setUserToken: (payload: any) => void; // Replace 'any' with the actual type of payload
}
