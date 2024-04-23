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
    marginTop: responsiveHeight(0.1),
    marginBottom: responsiveHeight(1.5),
  },

  leftContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    width: responsiveWidth(78),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(2),
    height: responsiveHeight(7),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },

  nameIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray300,
    height: responsiveWidth(9),
    width: responsiveWidth(9),
    borderRadius: responsiveWidth(4.5),
    marginHorizontal: responsiveWidth(3),
  },
  rightContainer: {
    alignItems: "center",
    width: responsiveWidth(15),
    height: responsiveHeight(7),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(2),
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
});

export default styles;
