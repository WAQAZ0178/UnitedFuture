import React from "react";
import { View } from "react-native";
import styles from "./styles";
import SemiBoldText from "../../../typography/semiBoldText";
import RegularText from "../../../typography/regularText";
import { colors } from "../../../global/utilities";
const HomeCard = ({ id, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameShareContainer}>
        <RegularText
          label={description}
          fontSize={2.2}
          color={colors.PrimaryBlue950}
          numberOfLines={1}
          maxWidth={90}
        />
      </View>
      <SemiBoldText
        label={`id : ${id}`}
        fontSize={2}
        color={colors.PrimaryBlue950}
        numberOfLines={1}
        maxWidth={80}
        // style={styles.otherText}
      />
    </View>
  );
};

export default React.memo(HomeCard);
