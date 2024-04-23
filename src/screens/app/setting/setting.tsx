import React, { useEffect, useRef, useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ActionButton,
  AppButton,
  AppHeader,
} from "../../../components/general";
import { colors } from "../../../global/utilities";
import { PortfolioSelectionCard } from "../../../components/feed";
import { useDispatch, useSelector } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";
import SemiBoldText from "../../../typography/semiBoldText";
import RegularText from "../../../typography/regularText";
import { Toast } from "../../../services/toast";
import { portfolioTypes } from "../../../store/types";
type props = NativeStackNavigationProp<RootStackParamList, "Setting">;
const Setting: React.FC<{}> = () => {
  const navigation = useNavigation<props>();
  const refRBSheet = useRef<RBSheet | null>(null);
  const dispatch = useDispatch();
  const portfolio = useSelector((store: any) => store?.state?.portfolioReducer);
  const [data, setdata] = useState<any>([]);
  const [currentItem, setCurrentItem] = useState();

  useEffect(() => {
    getPortfolioData();
  }, []);

  //?==================================== get portfolio data from redux and store it intgo local state  ============================
  const getPortfolioData = async () => {
    setdata(portfolio?.allPortfolio);
  };

  //?==================================== display portfolio card here ============================
  const renderPortfolioCard = (item: any) => {
    return (
      <PortfolioSelectionCard
        onPressPortfolio={() => openRBNSheet(item)}
        onPressSetting={() => {}}
        currentPortfolioId={portfolio?.currentPortfolio}
        item={item}
      />
    );
  };

  //todo==================================== open bottom sheet and store selected item in local state ============================
  const openRBNSheet = (item: any) => {
    setCurrentItem(item);
    refRBSheet?.current?.open();
  };

  //todo==================================== if selected portfolio is diffrrent then current portfolio ============================
  //todo==================================== change current portfolio data in redux  ============================
  const changeCurrentPortfolio = () => {
    let isDiffrent = checkCurrentPortfolio(currentItem);
    if (isDiffrent) {
      dispatch({
        type: portfolioTypes.SET_CURRENT_PORTFOLIO,
        payload: currentItem,
      });
    } else {
      Toast.showToast("Portfolio", "Porfolio already selected", "info");
    }
    refRBSheet?.current?.close();
    // (refRBSheet as any)?.current?.close();
  };

  //todo==================================== check if portfolio is already selected return false else true ============================
  const checkCurrentPortfolio = (item: any) => {
    let currentData = portfolio?.currentPortfolio;
    if (currentData?.id == item?.id) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        onBackPress={() => {}}
        backgroundColor={colors.white}
        title="Portfolio 1"
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

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType="fade"
        openDuration={2000}
        closeDuration={100}
        closeOnPressBack
        customStyles={{
          container: styles.rBContainer,
          draggableIcon: styles.draggableIcon,
          wrapper: styles.wrapper,
        }}
      >
        <View style={styles.changePortfolioContainer}>
          <SemiBoldText
            label={"Switch Portfolio"}
            fontSize={2.5}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
          />

          <RegularText
            label={"Are you sure that you want to switch portoflio "}
            fontSize={1.8}
            color={colors.primaryBlueBrand}
            numberOfLines={2}
            maxWidth={80}
            style={styles.extraPadding}
          />

          <AppButton
            backgroundColor={colors.primaryBlueBrand}
            disabled={false}
            loading={false}
            loaderColor={colors.white}
            marginTop={2}
            onPress={() => changeCurrentPortfolio()}
            title="Switch Portoflio"
            width={90}
            hasBorder={true}
            borderColor={colors.primaryBlueBrand}
          />
        </View>
      </RBSheet>

      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => renderPortfolioCard(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
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

export default Setting;
