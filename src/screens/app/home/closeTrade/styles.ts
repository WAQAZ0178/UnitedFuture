import { StyleSheet } from "react-native";
import { colors } from "../../../../global/utilities";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: responsiveWidth(95),
    marginTop: responsiveHeight(20),
  },

  //todo=========================== style for check box container etc
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral300,
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(95),
    height: responsiveHeight(7),
    paddingHorizontal: responsiveWidth(1),
  },
  checkBoxInnerView: {
    // width: responsiveWidth(95),
    // alignSelf: "center",
    flexDirection: "row",
  },

  radioButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  notesLable: {
    textAlign: "left",
    paddingLeft: responsiveWidth(1),
  },
});

export default styles;
