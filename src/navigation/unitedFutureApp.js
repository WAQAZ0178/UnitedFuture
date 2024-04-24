import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Splash, Login } from "../screens/testAuth";
const MainApp = createNativeStackNavigator();

const App = () => {
  return (
    <MainApp.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={"Splash"}
    >
      <MainApp.Screen name={"Splash"} component={Splash} />
      <MainApp.Screen name={"Login"} component={Login} />
    </MainApp.Navigator>
  );
};
export default App;
