import React from 'react';
import {StackCardInterpolationProps} from '@react-navigation/stack';
import {
  Splash,
  Login,
  Welcome,
  SignUp,
  Onboarding,
  OTP,
  ForgetPassword,
  ProfileInfo,
  ResetPassword,
} from '../../screens/auth';
import {AuthStackParamList} from '../../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Auth = () => {
  const screenOption = {
    headerShown: false,
    cardOverlayEnabled: true,
    cardStyleInterpolator: ({
      current: {progress},
    }: StackCardInterpolationProps) => ({
      cardStyle: {
        opacity: progress,
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    }),
  };
  return (
    <AuthStack.Navigator initialRouteName="Splash" screenOptions={screenOption}>
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="OTP" component={OTP} />
      <AuthStack.Screen name="ProfileInfo" component={ProfileInfo} />
    </AuthStack.Navigator>
  );
};
export default Auth;
