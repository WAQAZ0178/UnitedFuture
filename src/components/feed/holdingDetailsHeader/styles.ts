import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignSelf: "center",
    width: responsiveWidth(100),

    paddingVertical: responsiveHeight(1.5),
    // paddingHorizontal: responsiveWidth(3),
    margin: responsiveWidth(0.1),
  },
  nameContainer: {
    paddingHorizontal: responsiveWidth(3),
  },
  innerContainer: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(1),
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
