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
    width: responsiveWidth(95),
    flexDirection: "row",
    marginTop: responsiveHeight(1.5),
    paddingBottom: responsiveHeight(1.5),
  },
  dailyPkrContainer: {
    backgroundColor: colors.red600,
    paddingHorizontal: responsiveWidth(2),
    borderRadius: responsiveWidth(1),
    justifyContent: "center",
    alignItems: "center",
  },

  leftContainer: {
    alignItems: "flex-start",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
});

export default styles;
