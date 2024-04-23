import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    alignSelf: "center",
    // borderWidth: 1,
    // borderColor: "red",

    width: responsiveWidth(95),
  },
  innerContainer: {
    marginTop: responsiveHeight(2),
    width: responsiveWidth(95),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderColor: colors.neutral200,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: responsiveHeight(1.5),
  },
  textContainer: {
    textAlign: "center",
  },
});

export default styles;
