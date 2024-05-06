import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: responsiveWidth(100),
    paddingVertical: responsiveHeight(0.5),
    paddingHorizontal: responsiveWidth(2),
    paddingRight: responsiveWidth(4),
    height: responsiveWidth(10),
    backgroundColor: colors.white,
  },
  appHeaderContainer: {
    justifyContent: "center",
  },
  titleText: {
    marginLeft: responsiveWidth(3),
  },

  emptyBox: {
    width: responsiveWidth(10),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
