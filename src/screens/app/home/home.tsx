//import liraries
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ActionButton, AppHeader } from "../../../components/general";
import { LoginStateProps } from "../../../types/authType";
import { ACTIONS } from "../../../store/actions/user";
import { connect, useDispatch, useSelector } from "react-redux";
import { API } from "../../../services/apiServices";
import { portfolioTypes } from "../../../store/types";
import { colors } from "../../../global/utilities";
import HoldingFlatlist from "../../../components/flatlistSections/holdingFlatlist";
import { ScrollView } from "react-native-gesture-handler";

type props = NativeStackNavigationProp<RootStackParamList, "Home">;
const Home: React.FC<{}> = (props) => {
  const navigation = useNavigation<props>();
  const userTokens = useSelector((store: any) => store?.state?.userReducer);
  const portfolio = useSelector((store: any) => store?.state?.portfolioReducer);
  const [loading, setLoading] = useState(false);
  const [holding, setHolding] = useState<any>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getHolding();
    getUserPortfolio();
  }, []);

  const getUserPortfolio = async () => {
    let res: any = await API.getData("portfolios");
    dispatchData(portfolioTypes.SET_ALL_PORTFOLIO, res?.data?.data);
    if (!portfolio?.currentPortfolio?.id) {
      dispatchData(portfolioTypes.SET_CURRENT_PORTFOLIO, res?.data?.data[0]);
    }
  };

  const getHolding = async () => {
    setLoading(true);
    let id = portfolio?.currentPortfolio?.id;
    let res: any = await API.getData(`trades/${id}`);
    setHolding(res?.data);
    setLoading(false);
  };

  const dispatchData = (type: string, data: any) => {
    dispatch({
      type: type,
      payload: data,
    });
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
        onPressLeftIcon={() => navigation?.toggleDrawer()}
        leftIconName="menu"
        leftIconType="feather"
        onPressRightIcon={() => {}}
        onPressReload={() => {}}
        showReload={false}
        showSearchBar={false}
        search=""
        onChange={() => {}}
      />
      <ScrollView>
        <HoldingFlatlist data={holding} />
      </ScrollView>
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

export default Home;
