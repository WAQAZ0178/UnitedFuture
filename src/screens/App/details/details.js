import React from "react";
import { View, StatusBar } from "react-native";
import SemiBoldText from "../../../typography/semiBoldText";
import RegularText from "../../../typography/regularText";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthHeader } from "../../../components/general";
import { colors } from "../../../global/utilities";
import BoldText from "../../../typography/boldText";
const Details = ({ navigation, route }) => {
  const data = route?.params?.data;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        translucent={false}
      />
      <AuthHeader
        onBackPress={() => navigation.goBack()}
        title={"University Details"}
      />
      <View style={styles.cardContainer}>
        <BoldText
          color={colors.black}
          fontSize={2}
          label={data?.name}
          numberOfLines={2}
          maxWidth={80}
          style={styles.universityName}
        />
        <SemiBoldText
          color={"#333"}
          fontSize={2}
          label={data["state-province"]}
          numberOfLines={1}
          maxWidth={40}
          style={styles.infoText}
        />

        <View style={styles.countryContainer}>
          <RegularText
            color={"#333"}
            fontSize={1.8}
            label={data?.country}
            numberOfLines={1}
            maxWidth={40}
            style={styles.infoText}
          />
          <RegularText
            color={"#666"}
            fontSize={1.8}
            label={data?.alpha_two_code}
            numberOfLines={1}
            maxWidth={40}
            style={styles.countryCode}
          />
        </View>
        <RegularText
          color={"#1a0dab"}
          fontSize={1.6}
          label={data?.web_pages}
          numberOfLines={1}
          maxWidth={80}
          style={styles.webPage}
        />
      </View>
    </SafeAreaView>
  );
};

export default Details;
