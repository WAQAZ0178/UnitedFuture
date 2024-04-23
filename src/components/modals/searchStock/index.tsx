//import liraries
import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from "react-native";
import styles from "./styles";

import ReactNativeModal from "react-native-modal";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { Divider } from "react-native-paper";
import { Icon } from "react-native-elements";
import { colors } from "../../../global/utilities";
import SemiBoldText from "../../../typography/semiBoldText";
import { SearchStockCard } from "../../feed";
import { useIsFocused } from "@react-navigation/native";

interface CProps {
  setcurrentItem: (e: boolean) => void;
  setFieldValue: (type: string, val: string) => void;
  setSearchModal: (e: boolean) => void;
  setvisible: (e: boolean) => void;
  visible: boolean;
  data: Array<{
    name: string;
    // key: number;
    symbol: string;
  }>;
}
const SearchStock: React.FC<CProps> = ({
  setcurrentItem,
  setFieldValue,
  setSearchModal,
  visible,
  data,
  setvisible,
}) => {
  const [search, setSearch] = useState("");
  const [filterList, setfilterList] = useState<any>([]);
  const focus = useIsFocused();
  useEffect(() => {
    setSearch("");
    setfilterList([]);
  }, [focus]);

  const onChangeText = (str: string) => {
    setSearch(str);
    let copy = [...data];
    copy = copy.filter((e, i) => {
      if (
        e?.name?.toLowerCase().includes(str.toLowerCase()) ||
        e?.symbol?.toLowerCase().includes(str.toLowerCase())
      ) {
        return e;
      }
    });
    setfilterList(copy);
  };

  //?====================== display menu item  =======================
  const renderCompanyName = (item: any) => {
    return (
      <TouchableOpacity onPress={() => closeModal(item)}>
        <SearchStockCard item={item} />
        <Divider />
      </TouchableOpacity>
    );
  };

  const closeModal = (item: any) => {
    setcurrentItem(item);
    setSearchModal(false);
    setFieldValue("symbol", item?.symbol);
    setFieldValue("price", item?.close?.toString());
    setSearch("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ReactNativeModal
        style={{ flex: 1, margin: 0 }}
        backdropColor={colors.black}
        backdropOpacity={0.5}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        animationInTiming={800}
        animationOutTiming={800}
        useNativeDriver={true}
        onBackdropPress={() => setvisible(false)}
        onBackButtonPress={() => setvisible(false)}
        isVisible={visible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.inputContainer}>
              <Icon
                type="feather"
                name="search"
                color={colors.neutral400}
                size={responsiveFontSize(3)}
              />
              <TextInput
                allowFontScaling={false}
                value={search}
                placeholder={"Search"}
                placeholderTextColor={`${colors.gray600}99`}
                onChangeText={(txt) => onChangeText(txt)}
                style={styles.input}
              />
            </View>
            <TouchableOpacity onPress={() => setvisible(false)}>
              <SemiBoldText
                label={"Cancel"}
                fontSize={2}
                color={colors.primaryBlueBrand}
                numberOfLines={1}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuListContainer}>
            <SemiBoldText
              label={"Result"}
              fontSize={2}
              color={colors.primaryBlueBrand}
              numberOfLines={1}
            />
            <FlatList
              data={search.length > 0 ? filterList : data}
              // data={data}
              renderItem={({ item }) => renderCompanyName(item)}
              keyExtractor={(item, index) => index.toString()}
              initialNumToRender={50}
            />
          </View>
        </View>
      </ReactNativeModal>
    </SafeAreaView>
  );
};

export default React.memo(SearchStock);
