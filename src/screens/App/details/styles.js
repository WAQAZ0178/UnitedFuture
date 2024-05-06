import { StyleSheet } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: colors.white,
    marginTop: responsiveHeight(2),
    width: responsiveWidth(95),
    padding: responsiveWidth(3),
    marginHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(1),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: responsiveHeight(3),
  },
  universityName: {
    marginBottom: responsiveHeight(1),
  },
  infoText: {
    marginBottom: responsiveHeight(1),
  },
  countryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: responsiveHeight(1),
  },
});
export default styles;
