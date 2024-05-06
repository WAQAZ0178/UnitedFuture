import { StyleSheet } from "react-native";
import { colors } from "../../../global/utilities";
import { responsiveHeight } from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  innerContainer: {
    paddingBottom: responsiveHeight(5),
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
