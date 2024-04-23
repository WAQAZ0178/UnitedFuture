//import liraries
import React, { useEffect } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import styles from "./styles";
import FastImage from "react-native-fast-image";
import { appImages, colors } from "../../../global/utilities";
import { AuthStackParamList } from "../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { getObject, getKey } from "../../../services/storageServices";
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
    let isFirstTime = await getKey("isFirstTime");
    if (isFirstTime) {
      // if (user?.email) {
      navigation.replace("App");
      // } else {
      //   navigation.replace("Login");
      // }
    } else {
      navigation.replace("Onboarding");
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
        {/* <RegularText
          fontSize={2}
          numberOfLines={1}
          label={'Manage your investments efficiently'}
          color={colors.primaryGreenBrand}
          style={styles.messageText}
        /> */}
      </View>
      {/* <View style={styles.bottomContainer}>
        <RegularText
          fontSize={1.6}
          numberOfLines={1}
          label={'from'}
          color={colors.gray400}
        />
        <RegularText
          fontSize={2}
          numberOfLines={1}
          label={'Sarmaaya Financials Pvt Ltd'}
          color={colors.primaryGreenBrand}
          style={styles.companyNametext}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default Splash;
