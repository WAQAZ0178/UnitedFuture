import React, { FC } from "react";
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { appImages, colors } from "../../global/utilities";
import SemiBoldText from "../../typography/semiBoldText";
import { deleteKey, getObject } from "../../services/storageServices";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type props = NativeStackNavigationProp<RootStackParamList, "AppDrawer">;
const CustomDrawer: React.FC<{}> = () => {
  const navigation = useNavigation<props>();

  const logout = async () => {
    let user = await deleteKey("userInfo");
    let tokens = await deleteKey("tokens");
    navigation.replace("Auth", { screen: "Login" });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.mainView}>
          <View style={styles.profileView}>
            <Image source={appImages.headerLogo} style={styles.image as any} />
            <SemiBoldText
              numberOfLines={1}
              color={colors.white}
              fontSize={2}
              label={"user Email"}
              style={styles.nameText}
            />
            <SemiBoldText
              numberOfLines={1}
              color={colors.white}
              style={styles.nameText}
              fontSize={1.8}
              label={"user name"}
            />
            <TouchableOpacity onPress={() => logout()}>
              <SemiBoldText
                numberOfLines={1}
                color={colors.white}
                fontSize={1.8}
                label={"Logout"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawer;
