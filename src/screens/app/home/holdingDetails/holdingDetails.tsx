import { RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import {
  AppButton,
  AuthHeader,
  KeyboardAvoidScrollview,
} from "../../../../components/general";
import { colors } from "../../../../global/utilities";
import { RootStackParamList } from "../../../../types";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { HoldingDetailsHeader } from "../../../../components/feed";
type props = NativeStackNavigationProp<RootStackParamList, "HoldingDetails">;
type NextScreenProps = {
  route: RouteProp<{ params: { data: any } }, "params">;
};

const HoldingDetails: React.FC<NextScreenProps> = ({ route }) => {
  const navigation = useNavigation<props>();
  const { data } = route?.params;
  const dispatch = useDispatch();
  const tokens = useSelector(
    (store: any) => store?.state?.userReducer?.userToken
  );
  const portfolio = useSelector((store: any) => store?.state?.portfolioReducer);
  const stockData = useSelector((store: any) => store?.state?.symbolReducer);
  const [loading, setloading] = useState(false);
  // useEffect(() => {
  //   // getStocksData();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        backgroundColor="white"
        onBackPress={() => navigation.goBack()}
        textColor="black"
        title="Holding Details"
        marginTop={0}
      />

      <HoldingDetailsHeader marginTop={0} item={{}} />
      {/* <KeyboardAvoidScrollview keyboardShouldPersistTaps="handled">
        <View style={styles.buttonContainer}>
          <AppButton
            backgroundColor={colors.white}
            disabled={false}
            loading={false}
            loaderColor={colors.primaryBlueBrand}
            marginTop={0}
            onPress={() => navigation.goBack()}
            title="Cancel"
            width={30}
            hasBorder={true}
            borderColor={colors.primaryBlueBrand}
          />

          <AppButton
            backgroundColor={colors.primaryBlueBrand}
            disabled={loading}
            loading={loading}
            loaderColor={colors.white}
            marginTop={0}
            onPress={() => {}}
            title="Add Trade"
            width={60}
          />
        </View>
      </KeyboardAvoidScrollview> */}
    </SafeAreaView>
  );
};

export default HoldingDetails;
