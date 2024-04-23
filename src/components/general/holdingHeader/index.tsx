//import liraries
import React from "react";
import { View, TouchableOpacity } from "react-native";

import styles from "./styles";
import { Icon } from "react-native-elements";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
import BoldText from "../../../typography/boldText";
import SemiBoldText from "../../../typography/semiBoldText";
import RegularText from "../../../typography/regularText";
interface CProps {
  // backgroundColor?: string;
  marginTop?: number;
  title: string;
  // textColor?: string;
  firstHeading: string;
  secondHeading: string;
  thirdHeading: string;
  fourthHeading: string;
}
const HoldingHeader: React.FC<CProps> = ({
  // backgroundColor = colors.white,
  title,
  // textColor = colors.primaryBlueBrand,
  marginTop = 0,

  firstHeading,
  secondHeading,
  thirdHeading,
  fourthHeading,
}) => {
  let innerStyle = {
    // backgroundColor: backgroundColor,
    marginTop: responsiveHeight(marginTop),
  };
  return (
    <View style={[styles.container, innerStyle]}>
      <SemiBoldText
        color={colors.primaryBlueBrand}
        fontSize={2.2}
        label={title}
        numberOfLines={1}
        maxWidth={50}
      />
      <View style={styles.innerContainer}>
        <RegularText
          color={colors.neutral500}
          fontSize={1.5}
          label={firstHeading}
          numberOfLines={1}
          maxWidth={25}
          style={styles.textContainer}
        />
        <RegularText
          color={colors.neutral500}
          fontSize={1.5}
          label={secondHeading}
          numberOfLines={1}
          maxWidth={25}
          style={styles.textContainer}
        />
        <RegularText
          color={colors.neutral500}
          fontSize={1.5}
          label={thirdHeading}
          numberOfLines={1}
          maxWidth={22.5}
          style={styles.textContainer}
        />
        <RegularText
          color={colors.neutral500}
          fontSize={1.5}
          label={fourthHeading}
          numberOfLines={1}
          maxWidth={22.5}
          style={styles.textContainer}
        />
      </View>
    </View>
  );
};
export default React.memo(HoldingHeader);
