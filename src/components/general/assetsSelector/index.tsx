import React, { useState } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import styles from "./styles";
import { colors } from "../../../global/utilities";
import SemiBoldText from "../../../typography/semiBoldText";
import RegularText from "../../../typography/regularText";
interface CProps {
  onPress: (item: any) => void;
  marginTop: number;
  label: string;
  value: string;
  list: Array<{
    name: string;
    key: number;
    isSelected: boolean;
  }>;
}
const AssetsSelector: React.FC<CProps> = ({
  onPress,
  label,
  marginTop = 0,
  list,
  // ...otherProps
}) => {
  const containerStyle = {
    marginTop: responsiveHeight(marginTop),
  };

  const renderAssets = (item: any) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.buttonContainer,
          backgroundColor: item?.isSelected
            ? colors.primaryBlueBrand
            : colors.gray100,
        }}
        onPress={() => onPress(item)}
      >
        <RegularText
          label={item.name}
          fontSize={2}
          color={item?.isSelected ? colors.white : colors.primaryBlueBrand}
          numberOfLines={1}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.mainView, containerStyle]}>
      <SemiBoldText
        label={label}
        fontSize={2}
        color={colors.primaryBlueBrand}
        numberOfLines={1}
        style={styles.labelText}
      />

      <View style={styles.innerContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => renderAssets(item)}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
        />
      </View>
    </View>
  );
};
export default React.memo(AssetsSelector);
