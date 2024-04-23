import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import styles from "./home.styles";
import { connect, useSelector } from "react-redux";
import { HomeCard } from "../../components/feed";
import { API } from "../../services/apiServices";
import { colors } from "../../global/utilities";
import { ACTIONS } from "../../store/actions";
import useFetchData from "../../hooks/useFetchData";
import { deleteKey } from "../../services/storageServices";
import { AppButton } from "../../components/general";
const Home = (props) => {
  const { navigation } = props;
  const reduxList = useSelector((state) => state?.state?.todoReducer?.todolist);
  const { loading, list, getList } = useFetchData();
  const [btnLoading, setBtnLoading] = useState(false);
  useEffect(() => {
    getList();
  }, []);

  const refreshScreen = async () => {
    getList();
  };

  const renderItem = (item) => {
    return <HomeCard id={item?.id} description={item?.todo} />;
  };

  const logout = async () => {
    setBtnLoading(true);
    await deleteKey("userInfo");
    navigation.replace("Auth", { screen: "Login" });
    setBtnLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.white}
        barStyle={"dark-content"}
        translucent={false}
      />

      <View style={styles.innerContainer}>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size={"large"} color={"black"} />
          </View>
        ) : (
          <FlatList
            data={list}
            renderItem={({ item }) => renderItem(item)}
            bounces={true}
            contentContainerStyle={{ flex: 1 }}
            bouncesZoom={true}
            keyExtractor={(item, index) => index.toString()}
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
      <View style={styles.btnContainer}>
        <AppButton
          backgroundColor={colors.PrimaryBlue950}
          disabled={btnLoading}
          loaderColor="white"
          loading={btnLoading}
          onPress={() => logout()}
          title="Log out"
          width={90}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
