import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ActionButton, AppHeader } from "../../../components/general";
import { colors } from "../../../global/utilities";
type props = NativeStackNavigationProp<RootStackParamList, "Watchlist">;
const Watchlist: React.FC<{}> = () => {
  const navigation = useNavigation<props>();

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        onBackPress={() => {}}
        backgroundColor={colors.white}
        title="WatchList"
        textColor={colors.black}
        showRightIcon
        showLeftIcon
        onPressLeftIcon={() => {}}
        leftIconName="menu"
        leftIconType="feather"
        onPressRightIcon={() => {}}
        onPressReload={() => {}}
        showReload={false}
        showSearchBar={false}
        search=""
        onChange={() => {}}
      />

      <ActionButton
        backgroundColor="red"
        disabled={false}
        marginBottom={10}
        marginRight={3}
        onPress={() => {}}
        onPressAddPortfolio={() => navigation.navigate("CreatePortfolio")}
        onPressAddTrade={() => navigation.navigate("AddTrade")}
      />
    </SafeAreaView>
  );
};

export default Watchlist;
