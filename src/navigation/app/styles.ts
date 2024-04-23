import { Platform, StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { colors, fontFamily } from "../../global/utilities";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

const tabBarHeight = responsiveHeight(8);
const styles = StyleSheet.create({
  bottomTabBarContainer: {
    backgroundColor: colors.primaryBlueBrand,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  badge: {
    width: responsiveWidth(5),
    height: responsiveWidth(5),
    borderRadius: responsiveWidth(2),
    backgroundColor: colors.primaryBlueBrand,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 10,
    right: responsiveWidth(4.5),
    top: responsiveHeight(1.2),
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderTopWidth: responsiveWidth(0),
    elevation: 3,
  },
  tab: {
    alignItems: "center",
    height: tabBarHeight,
    justifyContent: "center",
    width: responsiveWidth(20),
  },
  titleText: {
    paddingTop: responsiveHeight(0.2),
  },
  icon: {
    width: responsiveWidth(6.5),
    height: responsiveWidth(6.5),
  },

  addButton: {
    position: "absolute",
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: responsiveWidth(13 / 2),
    top: responsiveHeight(-3),
    backgroundColor: colors.primaryBlueBrand,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  addButtonText: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.appTextBold,
    color: colors.black,
    paddingTop: responsiveHeight(4.5),
  },
  bottomIcon: {
    width: responsiveWidth(6.5),
    height: responsiveWidth(6.5),
  },
});
export default styles;
