import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "./unitedFutureApp";
import App from "./unitedFutureAuth";
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
