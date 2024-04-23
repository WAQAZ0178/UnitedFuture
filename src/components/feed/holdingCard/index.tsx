import React from "react";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { colors } from "../../../global/utilities";
import SemiBoldText from "../../../typography/semiBoldText";
import RegularText from "../../../typography/regularText";
import { Icon } from "react-native-elements";
import { responsiveFontSize } from "react-native-responsive-dimensions";

interface CProps {
  item: any;
  tradeable: any;
  history: any;
  onPressArrow: (item: any) => void;
}

const HoldingCard: React.FC<CProps> = ({
  item,
  tradeable,
  history,
  onPressArrow,
}) => {
  const container = {
    // backgroundColor:
    //   currentPortfolioId?.id == item?.id
    //     ? colors.primaryBlueBrand
    //     : colors.white,
  };

  const getTextColor = (total_pl: string) => {
    let val = total_pl?.toString();
    if (val?.includes("-")) {
      return colors.red400;
    } else {
      return colors.primaryGreenBrand;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.nameShareContainer}>
        <RegularText
          label={tradeable?.symbol}
          fontSize={2.2}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
          maxWidth={23}
        />
        <RegularText
          label={item?.available_qty + " Shares"}
          fontSize={1.2}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
          maxWidth={23}
        />
      </View>
      <SemiBoldText
        label={parseFloat(item?.mv).toFixed(1)}
        fontSize={2}
        color={colors.primaryBlueBrand}
        numberOfLines={1}
        maxWidth={25}
        style={styles.otherText}
      />
      <SemiBoldText
        label={parseFloat(item?.transaction_cost).toFixed(1)}
        fontSize={2}
        color={colors.primaryBlueBrand}
        numberOfLines={1}
        maxWidth={25}
        style={styles.otherText}
      />
      <View style={styles.dailyPLContainer}>
        <View style={styles.dailyPLInnerContainer}>
          <SemiBoldText
            label={item?.total_pl}
            fontSize={1.8}
            color={getTextColor(item?.total_pl)}
            numberOfLines={1}
            maxWidth={23}
          />
          <RegularText
            label={parseFloat(item?.total_pl_percentage).toFixed(3) + "%"}
            fontSize={1.5}
            color={getTextColor(item?.total_pl)}
            numberOfLines={1}
            maxWidth={23}
          />
        </View>
        <TouchableOpacity onPress={onPressArrow} style={styles.arrowButton}>
          <Icon
            name="keyboard-arrow-right"
            type="material-icon"
            color={colors.white}
            size={responsiveFontSize(2)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(HoldingCard);
