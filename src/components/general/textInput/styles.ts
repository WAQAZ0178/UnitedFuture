import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors, fontFamily } from "../../../global/utilities";
export default StyleSheet.create({
  mainView: {
    width: responsiveWidth(95),
    alignSelf: "center",
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(95),
    height: responsiveHeight(7),
    paddingHorizontal: responsiveWidth(2.5),
  },
  labelText: {
    paddingHorizontal: responsiveWidth(2),
    paddingBottom: responsiveHeight(0.5),
  },

  PasswordIcon: {
    position: "relative",
    alignSelf: "center",
  },
  errorLabel: {
    alignSelf: "flex-start",
    paddingTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(0.5),
    marginHorizontal: responsiveWidth(2),
  },
  TxtInput: {
    color: colors.primaryBlueBrand,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    minWidth: responsiveWidth(84),
    maxWidth: responsiveWidth(95),
    height: responsiveHeight(7),
    textAlign: "left",
    textAlignVertical: "center",
    paddingLeft: responsiveWidth(0.5),
  },
});
