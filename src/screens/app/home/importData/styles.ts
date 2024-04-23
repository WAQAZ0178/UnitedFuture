import { StyleSheet } from "react-native";
import { colors } from "../../../../global/utilities";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  innerContainer: {
    // justifyContent: "space-between",
    flex: 1,
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(3),
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: responsiveHeight(2),
  },
  extraMargin: {
    marginTop: responsiveHeight(1),
  },
  downloadText: {
    textDecorationLine: "underline",
    marginTop: responsiveHeight(1),
  },
  cardContainer: {
    // height: responsiveHeight(30),
    paddingVertical: responsiveHeight(3),
    borderWidth: 2,
    borderColor: colors.PrimaryGreen500,
    borderStyle: "dashed",

    backgroundColor: colors.PrimaryGreenLight,
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(3),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: responsiveWidth(5),
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: responsiveWidth(95),
    marginTop: responsiveHeight(35),
  },
});

export default styles;
