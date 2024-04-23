import { StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors, fontFamily } from "../../../global/utilities";
export default StyleSheet.create({
  mainView: {
    // width: responsiveWidth(95),
    // alignSelf: "center",
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    marginTop: responsiveHeight(2),
    width: responsiveWidth(95),
  },

  buttonContainer: {
    backgroundColor: colors.gray100,
    height: responsiveHeight(4),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(2.5),
    marginRight: responsiveWidth(2.5),
    alignItems: "center",
    justifyContent: "center",
  },
  labelText: {
    // paddingHorizontal: responsiveWidth(2),
    paddingBottom: responsiveHeight(0.5),
  },
});
