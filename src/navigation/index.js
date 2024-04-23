import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Auth from "./auth";
// import App from "./app";
import Auth from "./authNav";
import App from "./appNav";
const AppStack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Auth"}
      >
        <AppStack.Screen name="Auth" component={Auth} />
        <AppStack.Screen name="App" component={App} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
