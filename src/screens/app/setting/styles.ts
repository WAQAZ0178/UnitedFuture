import { StyleSheet } from "react-native";
import { colors } from "../../../global/utilities";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  changePortfolioContainer: {
    paddingTop: responsiveHeight(3),
    alignSelf: "center",
  },

  extraPadding: {
    paddingTop: responsiveHeight(0.5),
  },

  //todo========================================== below is the RNBSheet style ==========================
  rBContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: responsiveWidth(5),
    borderTopRightRadius: responsiveWidth(5),
    height: responsiveHeight(25),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  wrapper: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    // backgroundColor: "transparent",
  },
  draggableIcon: {
    backgroundColor: "#000",
  },
});

export default styles;
