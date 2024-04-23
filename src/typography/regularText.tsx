import React from "react";
import { StyleSheet, Text } from "react-native";
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
  maxWidth: number;
  children?: any;
  style?: any;
  // ...props:any
}
const RegularText: React.FC<CProps> = ({
  label,
  fontSize,
  color = colors.white,
  numberOfLines,
  children,
  maxWidth = 50,
  style,
  ...props
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

export default RegularText;

const styles = StyleSheet.create({
  label: {
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    color: colors.white,
    lineHeight: 18,
  },
});
