import React, { useEffect } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import styles from "./styles";
import FastImage from "react-native-fast-image";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from "../../../types";
import { getKey, getObject } from "../../../services/storageServices";
import { appImages, colors } from "../../../global/utilities";

type props = NativeStackNavigationProp<AuthStackParamList, "Splash">;
const Splash: React.FC<{}> = () => {
  const navigation = useNavigation<props>();

  useEffect(() => {
    setTimeout(() => {
      getUserInfo();
    }, 2000);
  }, []);

  const getUserInfo = async () => {
    let user = await getObject("userInfo");
    console.log("====================================");
    console.log(user);
    console.log("====================================");
    if (user?.email) {
      navigation.replace("App");
    } else {
      navigation.replace("Login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={colors.white} />
      <View style={styles.topContainer}>
        <FastImage
          resizeMode="contain"
          source={appImages.logo}
          style={styles.logo}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;
