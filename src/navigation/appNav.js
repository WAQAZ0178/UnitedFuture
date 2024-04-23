import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/testinScreens";
const MainApp = createNativeStackNavigator();

const Auth = () => {
  return (
    <MainApp.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={"Home"}
    >
      <MainApp.Screen name={"Home"} component={Home} />
    </MainApp.Navigator>
  );
};
export default Auth;
