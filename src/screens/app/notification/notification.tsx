//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getObject, setKey } from "../../../services/storageServices";
import moment from "moment";
import { PortfolioLineChart } from "../../../components/feed";
type props = NativeStackNavigationProp<RootStackParamList, "Notification">;
const Notification: React.FC<{}> = () => {
  const navigation = useNavigation<props>();
  const [data, setdata] = useState<object>({});
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await setKey("isFirstTime", moment().format("YYYMMDDhhmmss"));
    let user = await getObject("userInfo");
    let tokens = await getObject("tokens");
    setdata(user);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text style={{ color: "red" }}>Notification</Text>
        <Text style={{ color: "red" }}>{data?.email}</Text>
        <Text style={{ color: "red" }}>{data?.first_name}</Text>
        <Text style={{ color: "red" }}>{data?.last_name}</Text>
      </TouchableOpacity>
      <PortfolioLineChart />
    </View>
  );
};

export default Notification;
