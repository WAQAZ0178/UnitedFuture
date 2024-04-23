import React from "react";
import { View, Text, FlatList } from "react-native";
import { HoldingHeader } from "../../general";
import { HoldingCard } from "../../feed";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
interface Props {
  data: any;
}
type navProps = NativeStackNavigationProp<RootStackParamList, "Home">;

const HoldingFlatList: React.FC<Props> = ({ data }) => {
  const navigation = useNavigation<navProps>();

  const renderHoldingCard = (item: any) => {
    return (
      <HoldingCard
        onPressArrow={() =>
          navigation.navigate("HoldingDetails", { data: item })
        }
        item={item}
        history={item?.history}
        tradeable={item?.tradeable}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HoldingHeader
        title="Holdings"
        marginTop={0}
        firstHeading="Symbol"
        secondHeading="Market Value"
        thirdHeading="Avg Price"
        fourthHeading="Daily P&L"
      />

      <FlatList
        data={data}
        renderItem={({ item }) => renderHoldingCard(item)}
        keyExtractor={(item, index) => index.toString()}
        initialNumToRender={50}
      />
    </View>
  );
};
export default React.memo(HoldingFlatList);
