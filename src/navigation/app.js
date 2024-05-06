import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainApp = createNativeStackNavigator();
import { Home, Details } from "../screens/App";
const App = () => {
  return (
    <MainApp.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={"Home"}
    >
      <MainApp.Screen name={"Home"} component={Home} />
      <MainApp.Screen name={"Details"} component={Details} />
    </MainApp.Navigator>
  );
};
export default App;
