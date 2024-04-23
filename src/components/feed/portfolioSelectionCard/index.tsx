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
  currentPortfolioId: any;
  onPressPortfolio: (item: any) => void;
  onPressSetting: () => void;
}

const PortfolioSelectionCard: React.FC<CProps> = ({
  item,
  currentPortfolioId,
  onPressPortfolio,
  onPressSetting,
}) => {
  const container = {
    backgroundColor:
      currentPortfolioId?.id == item?.id
        ? colors.primaryBlueBrand
        : colors.white,
  };

  const getTextColor = () => {
    if (currentPortfolioId?.id == item?.id) {
      return colors.white;
    } else {
      return colors.primaryBlueBrand;
    }
  };

  const getFirstAlphabat = (val: string | "") => {
    let copy = val?.split("");
    if (copy?.length > 0) {
      return copy[0];
    } else {
      return "";
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressPortfolio}
        style={[styles.leftContainer, container]}
      >
        <View style={styles.nameIconContainer}>
          <SemiBoldText
            label={getFirstAlphabat(item?.name)}
            fontSize={2}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
          />
        </View>
        <RegularText
          label={item?.name}
          fontSize={2}
          color={getTextColor()}
          numberOfLines={1}
          maxWidth={30}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSetting} style={styles.rightContainer}>
        <Icon
          name="edit-3"
          type="feather"
          color={colors.primaryBlueBrand}
          size={responsiveFontSize(3)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(PortfolioSelectionCard);
