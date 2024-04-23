import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { colors } from "../../../global/utilities";
import SemiBoldText from "../../../typography/semiBoldText";
import RegularText from "../../../typography/regularText";

interface CProps {
  item: any;
}

const SearchStockCard: React.FC<CProps> = ({ item }) => {
  const getColor = (val: string, isText: boolean) => {
    val = val?.toString();
    if (isText) {
      if (val?.includes("-")) {
        return colors.red500;
      } else {
        return colors.PrimaryGreen600;
      }
    } else {
      if (val?.includes("-")) {
        return colors.red100;
      } else {
        return colors.PrimaryGreen100;
      }
    }
  };

  const pkrText = {
    backgroundColor: getColor(item?.change, false),
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <SemiBoldText
          label={item?.symbol}
          fontSize={2}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
        />
        <RegularText
          label={item?.name}
          fontSize={1.5}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
        />
      </View>
      <View style={styles.rightContainer}>
        <View style={[styles.dailyPkrContainer, pkrText]}>
          <SemiBoldText
            label={"PKR  " + item?.close}
            fontSize={2}
            color={getColor(item?.change, true)}
            numberOfLines={1}
          />
        </View>

        <RegularText
          label={item?.change + "  (" + item?.change_percent + ")%"}
          fontSize={1.5}
          color={getColor(item?.change, true)}
          numberOfLines={1}
        />
      </View>
    </View>
  );
};

export default React.memo(SearchStockCard);
