import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignSelf: "center",
    width: responsiveWidth(95),
    marginTop: responsiveHeight(0.1),
    marginBottom: responsiveHeight(1.5),
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral200,
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveHeight(1),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(1),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  nameShareContainer: {
    width: responsiveWidth(90),
  },

  dailyPLContainer: {
    width: responsiveWidth(25),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  otherText: {
    textAlign: "center",
    width: responsiveWidth(40),
  },
  dailyPLInnerContainer: {
    alignItems: "flex-end",
  },

  arrowButton: {
    width: responsiveWidth(6.5),
    height: responsiveWidth(6.5),
    borderRadius: responsiveWidth(3.5),
    backgroundColor: colors.primaryBlueBrand,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: responsiveWidth(2),
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
