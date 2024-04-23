import { StyleSheet } from "react-native";
import { colors } from "../../global/utilities";
import { responsiveHeight } from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  innerContainer: {
    // flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    position: "absolute",
    bottom: responsiveHeight(3),
  },
});

export default styles;
