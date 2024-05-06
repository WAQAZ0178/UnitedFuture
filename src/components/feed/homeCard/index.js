import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { colors } from "../../../global/utilities";
import { Icon } from "react-native-elements";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import BoldText from "../../../typography/boldText";
import SemiBoldText from "../../../typography/semiBoldText";
const HomeCard = ({ state, UniName, onPressDetails }) => {
  return (
    <TouchableOpacity onPress={onPressDetails} style={styles.container}>
      <View style={styles.detailsContainer}>
        <BoldText
          label={UniName}
          fontSize={2.2}
          color={colors.blue950}
          numberOfLines={1}
          maxWidth={75}
        />
        <SemiBoldText
          label={state}
          fontSize={2}
          color={colors.gray700}
          numberOfLines={1}
          maxWidth={80}
          style={styles.stateText}
        />
      </View>
      <View style={styles.arrowButton}>
        <Icon
          type="material-icon"
          name="arrow-forward-ios"
          color={colors.gray700}
          size={responsiveFontSize(2)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(HomeCard);
