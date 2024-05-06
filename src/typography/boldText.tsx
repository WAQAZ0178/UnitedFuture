import React from "react";
import { StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { colors, fontFamily } from "../global/utilities";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
interface CProps {
  label: string;
  fontSize: number;
  color: string;
  numberOfLines: number;
  children?: any;
  maxWidth: number;
  style?: any;
  // ...props:any
}
const BoldText: React.FC<CProps> = ({
  label,
  fontSize,
  color,
  maxWidth = 50,
  numberOfLines,
  children,
  style,
}) => {
  const innerStyle = {
    color: color,
    fontSize: responsiveFontSize(fontSize),
    maxWidth: maxWidth ? responsiveWidth(maxWidth) : null,
  };
  return (
    <Text
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      // {...props}
      style={[styles.label, innerStyle, style]}
    >
      {label}
      {children}
    </Text>
  );
};

export default BoldText;

const styles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.appTextBold,
    fontSize: responsiveFontSize(2),
    color: colors.white, //default color
  },
});
