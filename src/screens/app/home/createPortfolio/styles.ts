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
    justifyContent: "space-between",
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
  },
  topContainer: {},
  bottomContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: responsiveWidth(95),
    marginTop: responsiveHeight(40),
  },
});

export default styles;
