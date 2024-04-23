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
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral300,
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(95),
    height: responsiveHeight(7),
    paddingHorizontal: responsiveWidth(1),
  },

  notesInput: {
    color: colors.primaryBlueBrand,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    textAlign: "left",
    textAlignVertical: "center",
  },
  labelText: {
    textAlign: "left",
  },

  notesLable: {
    textAlign: "left",
    paddingLeft: responsiveWidth(1),
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
    fontSize: responsiveFontSize(2),
    minWidth: responsiveWidth(70),
    maxWidth: responsiveWidth(90),
    height: responsiveHeight(7),
    textAlign: "right",
    textAlignVertical: "center",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
