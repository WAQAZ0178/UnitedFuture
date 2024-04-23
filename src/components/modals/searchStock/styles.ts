import { StyleSheet, Platform } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { colors, fontFamily } from "../../../global/utilities";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: responsiveWidth(95),
    marginTop:
      Platform.OS == "android" ? responsiveHeight(1) : responsiveHeight(5),
  },

  inputContainer: {
    width: responsiveWidth(80),
    backgroundColor: colors.neutral50,
    borderRadius: responsiveWidth(2),
    height: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(2.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  modalContainer: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    width: responsiveWidth(100),
    paddingTop: responsiveHeight(5),
    borderRadius: responsiveWidth(2),
  },
  menuListContainer: {
    paddingTop: responsiveHeight(2),
  },
  input: {
    color: colors.black,
    textAlignVertical: "center",
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(70),
    paddingLeft: responsiveWidth(2),
  },
});

export default styles;
