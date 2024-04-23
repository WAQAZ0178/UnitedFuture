import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: responsiveWidth(95),
    flexDirection: "row",
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(2),
    margin: responsiveWidth(0.1),
    borderRadius: responsiveWidth(3),
    backgroundColor: colors.neutral50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  leftContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  leftInnerContainer: {
    marginLeft: responsiveWidth(2),
  },

  nameIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.PrimaryBlue700,
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    borderRadius: responsiveWidth(8),
  },
  rightContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  extraPadding: {
    paddingTop: responsiveHeight(0.5),
  },
});

export default styles;
