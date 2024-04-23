import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors, fontFamily } from "../global/utilities";
interface CProps {
  label: string;
  fontSize: number;
  color: string;
  numberOfLines: number;
  maxWidth: number;
  children?: any;
  style?: any;
  // ...props:any
}
const MediumText: React.FC<CProps> = ({
  label,
  fontSize,
  color = colors.white,
  numberOfLines,
  maxWidth = 50,
  children,
  style,
  // ...props
}) => {
  const innerStyle = {
    color: color,
    fontSize: responsiveFontSize(fontSize),
    maxWidth: maxWidth ? responsiveWidth(maxWidth) : null,
  };
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      // {...props}
      style={[styles.label, innerStyle, style]}
    >
      {label}
      {children}
    </Text>
  );
};

export default MediumText;

const styles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: responsiveFontSize(1.8),
    color: colors.white, //default color
  },
});
