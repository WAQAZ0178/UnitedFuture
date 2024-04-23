import { StyleSheet } from "react-native";
import { colors } from "../../../../global/utilities";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: responsiveWidth(95),
    marginTop: responsiveHeight(10),
  },
});

export default styles;
