import React, { useEffect } from "react";
import {
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import { HomeCard } from "../../../components/feed";
import { colors } from "../../../global/utilities";
import useFetchData from "../../../hooks/useFetchData";
import { AppHeader } from "../../../components/general/headers";
import SemiBoldText from "../../../typography/semiBoldText";

const Home = (props) => {
  const { navigation } = props;
  const { loading, list, getList } = useFetchData();

  //===================================== fetching data from API =====================================
  useEffect(() => {
    getList();
  }, []);

  //===================================== on refreshing screen get fresh data from api =====================================
  const refreshScreen = async () => {
    getList();
  };

  const renderItem = (item) => {
    return (
      <HomeCard
        onPressDetails={() => onPressDetails(item)}
        UniName={item?.name}
        state={item["state-province"]}
      />
    );
  };

  const onPressDetails = (item) => {
    navigation.navigate("Details", { data: item });
  };

  const renderEmpty = () => {
    return (
      <View style={styles.loading}>
        <SemiBoldText
          color={colors.black}
          fontSize={1.5}
          label={"Something went wrong"}
          numberOfLines={1}
          maxWidth={70}
          style={styles.infoText}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        translucent={false}
      />
      <AppHeader title={"Home"} />
      <View style={styles.innerContainer}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size={"large"} color={"black"} />
          </View>
        ) : (
          <FlatList
            data={list}
            renderItem={({ item }) => renderItem(item)}
            contentContainerStyle={styles.innerContainer}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={renderEmpty}
            bouncesZoom={true}
            bounces={true}
            initialNumToRender={15}
            maxToRenderPerBatch={15}
            removeClippedSubviews={true}
            shouldItemUpdate={(props, nextProps) =>
              props.item !== nextProps.item
            }
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={refreshScreen} />
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
