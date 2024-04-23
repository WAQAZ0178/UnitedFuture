import { StyleSheet } from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },

  fingerPrintCheckbox: {
    width: responsiveWidth(95),
    marginTop: responsiveHeight(2),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  fingerPrintText: {
    paddingRight: responsiveWidth(2),
  },
  forgetPasswordButton: {
    width: responsiveWidth(95),
    marginTop: responsiveHeight(2),
    alignItems: "flex-end",
  },

  fingerAuthContainer: {
    marginTop: responsiveHeight(15),
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
