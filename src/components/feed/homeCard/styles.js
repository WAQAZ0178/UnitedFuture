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
    alignSelf: "center",
    flexDirection: "row",
    width: responsiveWidth(95),
    marginBottom: responsiveHeight(1.5),
    paddingVertical: responsiveHeight(4),
    paddingHorizontal: responsiveHeight(1),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(1),
    shadowColor: "#000",
    margin: responsiveWidth(0.5),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  detailsContainer: {
    width: responsiveWidth(75),
  },
  stateText: {
    paddingTop: responsiveHeight(1),
  },

  arrowButton: {
    alignItems: "center",
    justifyContent: "center",
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    borderRadius: responsiveWidth(3.5),
    backgroundColor: colors.cloud,
    justifyContent: "center",
    alignItems: "center",
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
