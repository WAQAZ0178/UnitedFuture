import React, { Component } from "react";
import { View, Platform, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";

const styles = StyleSheet.create({
  container: {
    // width: responsiveWidth(14),
    // height: responsiveWidth(14),
    // borderRadius: responsiveWidth(14 / 2),
    // alignItems: "center",
    // justifyContent: "center",
    // zIndex: 100,
    backgroundColor: colors.primaryBlueBrand,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

//make this component available to the app
export default styles;
