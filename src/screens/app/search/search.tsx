import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { ActionButton, AppHeader } from "../../../components/general";
import { colors } from "../../../global/utilities";
import { RootStackParamList } from "../../../types";
import styles from "./styles";
type props = NativeStackNavigationProp<RootStackParamList, "Search">;
const Search: React.FC<{}> = () => {
  const navigation = useNavigation<props>();

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        onBackPress={() => {}}
        backgroundColor={colors.white}
        title="Search"
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

export default Search;
