import React from "react";
import { View } from "react-native";
import { colors } from "../../../global/utilities";
import BoldText from "../../../typography/boldText";
import RegularText from "../../../typography/regularText";
import SemiBoldText from "../../../typography/semiBoldText";
import styles from "./styles";
import { responsiveHeight } from "react-native-responsive-dimensions";
import MediumText from "../../../typography/mediumText";
interface CProps {
  item: any;
  marginTop: number;
}
const HoldingDetailsHeader: React.FC<CProps> = ({ item, marginTop = 0 }) => {
  const containerStyle = {
    marginTop: responsiveHeight(marginTop),
  };

  const getFirstAlphabat = (val: string | "") => {
    let copy = val?.split("");
    if (copy?.length > 0) {
      return copy[0];
    } else {
      return "";
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.nameContainer}>
        <SemiBoldText
          label={"HBL"}
          fontSize={3}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
          maxWidth={50}
        />

        <RegularText
          label={"Habib Bank Limited"}
          fontSize={1.8}
          color={colors.neutral600}
          numberOfLines={1}
          maxWidth={50}
          style={styles.extraPadding}
        />
      </View>
      <View style={styles.innerContainer}>
        <MediumText
          label={"Summary"}
          fontSize={2}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
          maxWidth={30}
        />
      </View>

      {/* <View style={styles.leftContainer}>
        <View style={styles.nameIconContainer}>
          <SemiBoldText
            label={getFirstAlphabat("System limited")}
            fontSize={2}
            color={colors.white}
            numberOfLines={1}
          />
        </View>
        <View style={styles.leftInnerContainer}>
          <BoldText
            label={"System limited (SYS)"}
            fontSize={2}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
            maxWidth={50}
          />

          <RegularText
            label={"Purchased at 8/1/2023"}
            fontSize={1.8}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
            maxWidth={50}
            style={styles.extraPadding}
          />
        </View>
      </View>

      <View style={styles.rightContainer}>
        <BoldText
          label={"PKR 456.21"}
          fontSize={2}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
          maxWidth={30}
        />

        <RegularText
          label={"432 shares"}
          fontSize={1.8}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
          maxWidth={30}
          style={styles.extraPadding}
        />
      </View> */}
    </View>
  );
};

export default React.memo(HoldingDetailsHeader);
