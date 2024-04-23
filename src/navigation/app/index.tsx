import React from "react";
import { Platform, View } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import styles from "./styles";
import { colors, appSvg } from "../../global/utilities";
import {
  Home,
  Notification,
  AddTrade,
  CloseTrade,
  CreatePortfolio,
  ImportData,
  Setting,
  History,
  Search,
  Watchlist,
  HoldingDetails,
} from "../../screens/app";
import CustomDrawer from "../drawer";
import { RootStackParamList } from "../../types";
import RegularText from "../../typography/regularText";
//todo:============================== all stack object created below ============================================
const HomeStack = createNativeStackNavigator<RootStackParamList>();
const SettingStack = createNativeStackNavigator<RootStackParamList>();
const SearchStack = createNativeStackNavigator<RootStackParamList>();
const HistoryStack = createNativeStackNavigator<RootStackParamList>();
const WatchlistStack = createNativeStackNavigator<RootStackParamList>();
const MainApp = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();
const MainTab = createBottomTabNavigator();
const tabBarHeight =
  Platform.OS == "android" ? responsiveHeight(8) : responsiveHeight(10);

const screenOption = {
  headerShown: false,
  gestureEnabled: false,
};
//todo:============================== all tab stack define here ============================================
const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator screenOptions={screenOption} initialRouteName={"Home"}>
      <HomeStack.Screen name={"Home"} component={Home} />
    </HomeStack.Navigator>
  );
};

const SearchStackScreens = () => {
  return (
    <SearchStack.Navigator
      screenOptions={screenOption}
      initialRouteName={"Search"}
    >
      <SearchStack.Screen name={"Search"} component={Search} />
    </SearchStack.Navigator>
  );
};

const HistoryStackScreens = () => {
  return (
    <HistoryStack.Navigator
      screenOptions={screenOption}
      initialRouteName={"History"}
    >
      <HistoryStack.Screen name={"History"} component={History} />
    </HistoryStack.Navigator>
  );
};

const WatchlistStackScreens = () => {
  return (
    <WatchlistStack.Navigator
      screenOptions={screenOption}
      initialRouteName={"Watchlist"}
    >
      <WatchlistStack.Screen name={"Watchlist"} component={Watchlist} />
    </WatchlistStack.Navigator>
  );
};

const SettingStackScreens = () => {
  return (
    <SettingStack.Navigator
      screenOptions={screenOption}
      initialRouteName={"Setting"}
    >
      <SettingStack.Screen name={"Setting"} component={Setting} />
    </SettingStack.Navigator>
  );
};

//todo:============================== bottom tab drawer navigation and app stack define below  ============================================
const MainTabScreens = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.primaryBlueBrand,
          display: "flex",
          width: responsiveWidth(100),
          alignSelf: "center",
          height: tabBarHeight,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          alignItems: "center",
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderTopWidth: responsiveWidth(0),
          elevation: 5,
          position: "absolute",
          bottom: 0,
          paddingTop: Platform.OS === "android" ? null : responsiveHeight(1),
        },
      }}
      initialRouteName={"HomeStackScreens"}
    >
      <MainTab.Screen
        name={"HomeStackScreens"}
        component={HomeStackScreens}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tab}>
                {focused ? (
                  <appSvg.HomeActiveSvg width="100%" height="45%" />
                ) : (
                  <appSvg.HomeSvg width="100%" height="45%" />
                )}
                <RegularText
                  label={"Home"}
                  color={focused ? colors.primaryGreenBrand : colors.white}
                  numberOfLines={1}
                  fontSize={1.4}
                  style={styles.titleText}
                  maxWidth={20}
                />
              </View>
            );
          },
        })}
      />

      <MainTab.Screen
        name={"SearchStackScreens"}
        component={SearchStackScreens}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tab}>
                {focused ? (
                  <appSvg.SearchActiveSvg width="100%" height="45%" />
                ) : (
                  <appSvg.SearchSvg width="100%" height="45%" />
                )}
                <RegularText
                  label={"Search"}
                  color={focused ? colors.primaryGreenBrand : colors.white}
                  numberOfLines={1}
                  fontSize={1.4}
                  style={styles.titleText}
                  maxWidth={20}
                />
              </View>
            );
          },
        })}
      />
      <MainTab.Screen
        name={"HistoryStackScreens"}
        component={HistoryStackScreens}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tab}>
                {focused ? (
                  <appSvg.HistoryActiveSvg width="100%" height="45%" />
                ) : (
                  <appSvg.HistorySvg width="100%" height="45%" />
                )}
                <RegularText
                  label={"History"}
                  color={focused ? colors.primaryGreenBrand : colors.white}
                  numberOfLines={1}
                  fontSize={1.4}
                  style={styles.titleText}
                  maxWidth={20}
                />
              </View>
            );
          },
        })}
      />
      <MainTab.Screen
        name={"WatchlistStackScreens"}
        component={WatchlistStackScreens}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tab}>
                {focused ? (
                  <appSvg.WatchlistActiveSvg width="100%" height="45%" />
                ) : (
                  <appSvg.WatchlistSvg width="100%" height="45%" />
                )}
                <RegularText
                  label={"Watchlist"}
                  color={focused ? colors.primaryGreenBrand : colors.white}
                  numberOfLines={1}
                  fontSize={1.4}
                  style={styles.titleText}
                  maxWidth={20}
                />
              </View>
            );
          },
        })}
      />

      <MainTab.Screen
        name={"SettingStackScreens"}
        component={SettingStackScreens}
        options={(props) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View style={styles.tab}>
                {focused ? (
                  <appSvg.SettingActiveSvg width="100%" height="45%" />
                ) : (
                  <appSvg.SettingSvg width="100%" height="45%" />
                )}
                <RegularText
                  label={"Setting"}
                  color={focused ? colors.primaryGreenBrand : colors.white}
                  numberOfLines={1}
                  fontSize={1.4}
                  style={styles.titleText}
                  maxWidth={20}
                />
              </View>
            );
          },
        })}
      />
    </MainTab.Navigator>
  );
};

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName={"MainTabScreens"}
      screenOptions={{
        headerShown: false,
        overlayColor: "rgba(0,0,0,0.5)",
        drawerType: "front",
        drawerStyle: {
          width: responsiveWidth(75),
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name={"MainTabScreens"} component={MainTabScreens} />
      <Drawer.Screen name={"Notification"} component={Notification} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <MainApp.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
      initialRouteName={"AppDrawer"}
    >
      <MainApp.Screen name={"AppDrawer"} component={AppDrawer} />
      <MainApp.Screen name={"Notification"} component={Notification} />
      <MainApp.Screen name={"CreatePortfolio"} component={CreatePortfolio} />
      <MainApp.Screen name={"AddTrade"} component={AddTrade} />
      <MainApp.Screen name={"ImportData"} component={ImportData} />
      <MainApp.Screen name={"CloseTrade"} component={CloseTrade} />
      <MainApp.Screen name={"HoldingDetails"} component={HoldingDetails} />
    </MainApp.Navigator>
  );
};

export default App;
