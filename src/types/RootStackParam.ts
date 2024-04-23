// import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  App: undefined;
  AppDrawer: undefined;
  MainTabScreens: undefined;
  Profile: undefined;
  Notification: undefined;
  Auth: undefined;
  CreatePortfolio: undefined;
  AddTrade: undefined;
  ImportData: undefined;
  HomeStackScreens: undefined;
  SettingStackScreens: undefined;
  SearchStackScreens: undefined;
  HistoryStackScreens: undefined;
  WatchlistStackScreens: undefined;
  Setting: undefined;
  Search: undefined;
  Watchlist: undefined;
  History: undefined;
  HoldingDetails: {
    data: any;
  };
  CloseTrade: {
    data: any;
  };
};
// export type TabParamList = {
//     Home: NavigatorScreenParams<RootStackParamList>;
//     Search: { userId: string };
//     Groups:undefined;
//     Messages:undefined;
//     Notifications:undefined;
// };
// export type DrawerParamList = {
//     Tab: NavigatorScreenParams<TabParamList>;
// };
