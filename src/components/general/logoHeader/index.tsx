//import liraries
import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import FastImage from "react-native-fast-image";
import { appImages, colors } from "../../../global/utilities";
import RegularText from "../../../typography/regularText";
import SemiBoldText from "../../../typography/semiBoldText";
import { Icon } from "react-native-elements";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
interface props {
  heading?: string;
  subHeading?: string;
  marginTop: number;
  showBackButton: boolean;
  onPressBack?: () => void;
}
const LogoHeader: React.FC<props> = ({
  heading = "",
  subHeading = "",
  showBackButton,
  onPressBack,
  marginTop = 0,
}) => {
  return (
    <View
      style={{ ...styles.container, marginTop: responsiveHeight(marginTop) }}
    >
      <View style={styles.logoInnerContainer}>
        {showBackButton ? (
          <TouchableOpacity onPress={onPressBack} style={styles.backContainer}>
            <Icon
              name={"arrow-back"}
              type={"ionicon"}
              color={colors.primaryBlueBrand}
              size={responsiveFontSize(2.5)}
            />
            <RegularText
              fontSize={1.9}
              numberOfLines={1}
              label={"Back"}
              color={colors.primaryBlueBrand}
              style={styles.backText}
              maxWidth={20}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyBox} />
        )}
        <FastImage
          resizeMode="contain"
          source={appImages.headerLogo}
          style={styles.logo as any}
        />
        <View style={styles.emptyBox} />
      </View>

      <View style={styles.innerContainer}>
        <SemiBoldText
          fontSize={3.2}
          numberOfLines={2}
          label={heading}
          color={colors.neutral950}
          style={styles.headingTetx}
          maxWidth={80}
        />
        <RegularText
          fontSize={2}
          numberOfLines={2}
          label={subHeading}
          color={colors.neutral800}
          style={styles.subHeading}
          maxWidth={80}
        />
      </View>
    </View>
  );
};

export default LogoHeader;
