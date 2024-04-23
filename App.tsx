import React, { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { persistor, store } from "./src/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { colors, fontFamily } from "./src/global/utilities";
import { AppProvider } from "./src/context/appContext";
import AppNavigator from "./src/navigation";
import Toast, {
  BaseToast,
  ErrorToast,
  BaseToastProps,
} from "react-native-toast-message";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { PaperProvider } from "react-native-paper";

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "884788596487-cajtrvd3f7l7ghc2o19mv757uikuebtt.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);

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

  const toastConfig = {
    success: (props: BaseToastProps) => (
      <BaseToast
        {...props}
        text2NumberOfLines={2}
        style={{
          borderLeftColor: colors.primaryBlueBrand,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        text1Style={{
          fontSize: responsiveFontSize(2.5),
          fontFamily: fontFamily.appTextBold,
          color: colors.primaryBlueBrand,
        }}
        text2Style={{
          fontSize: responsiveFontSize(2),
          fontFamily: fontFamily.appTextMedium,
          color: colors.primaryBlueBrand,
        }}
      />
    ),
    error: (props: BaseToastProps) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: responsiveFontSize(2.5),
          fontFamily: fontFamily.appTextBold,
          color: colors.red500,
        }}
        text2Style={{
          fontSize: responsiveFontSize(2),
          fontFamily: fontFamily.appTextMedium,
          color: colors.primaryBlueBrand,
        }}
      />
    ),

    info: (props: BaseToastProps) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: responsiveFontSize(2.5),
          fontFamily: fontFamily.appTextBold,
          color: colors.primaryBlueBrand,
        }}
        text2Style={{
          fontSize: responsiveFontSize(2),
          fontFamily: fontFamily.appTextMedium,
          color: colors.primaryBlueBrand,
        }}
      />
    ),
  };

  return (
    <Provider store={store}>
      <AppProvider>
        <PersistGate loading={<IsLoading />} persistor={persistor}>
          <PaperProvider>
            <StatusBar
              backgroundColor={colors.white}
              barStyle={"dark-content"}
            />
            <AppNavigator />
            <Toast config={toastConfig} />
          </PaperProvider>
        </PersistGate>
      </AppProvider>
    </Provider>
  );
};

export default App;
