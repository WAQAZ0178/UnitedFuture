import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { persistor, store } from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { colors } from "./src/global/utilities";
import AppNavigator from "./src/navigation";
const App = () => {
  const IsLoading = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={colors.primaryGreenBrand} size={"small"} />
      </View>
    );
  };
  return (
    <Provider store={store}>
      <PersistGate loading={<IsLoading />} persistor={persistor}>
        <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
