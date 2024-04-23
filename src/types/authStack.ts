export type AuthStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  App: undefined;

  ResetPassword: {
    email: string;
    accessToken: string;
  };
  OTP: {
    email: string;
    isSignUp: boolean;
  };
  ProfileInfo: {
    email: string;
    accessToken: string;
  };
  Onboarding: undefined;
};
