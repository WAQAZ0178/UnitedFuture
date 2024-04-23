import React from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { colors } from "../../../global/utilities";
import styles from "./styles";
import BoldText from "../../../typography/boldText";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
interface CProps {
  onPress: () => void;
  title: string;
  loading: boolean;
  disabled: boolean;
  backgroundColor: string;
  loaderColor: string;
  width: number;
  marginTop: number;
  hasBorder?: boolean;
  borderColor?: string;
}

const AppButton: React.FC<CProps> = ({
  title,
  loading,
  disabled,
  backgroundColor = colors.primaryGreenBrand,
  loaderColor = "white",
  width = 95,
  marginTop = 0,
  onPress,
  hasBorder = false,
  borderColor,
}) => {
  const containerStyle = {
    backgroundColor: backgroundColor,
    width: responsiveWidth(width),
    marginTop: responsiveHeight(marginTop),
    borderWidth: hasBorder ? 1 : 0,
    borderColor: hasBorder ? borderColor : "transparent",
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      {loading ? (
        <ActivityIndicator color={loaderColor} size={"small"} />
      ) : (
        <View style={styles.innerContainer}>
          <BoldText
            maxWidth={50}
            fontSize={2}
            numberOfLines={1}
            label={title}
            color={loaderColor}
            style={styles.buttonText}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
