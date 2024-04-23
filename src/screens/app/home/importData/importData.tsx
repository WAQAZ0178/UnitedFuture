import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types";
import {
  AppButton,
  AuthHeader,
  KeyboardAvoidScrollview,
} from "../../../../components/general";
import TextInput from "../../../../components/general/textInput";
import { useFormik } from "formik";
import { createPortfolioValidation } from "../../../../services/validationServices";
import { colors } from "../../../../global/utilities";
import { API } from "../../../../services/apiServices";
import { useSelector } from "react-redux";
import moment from "moment";
import BoldText from "../../../../typography/boldText";
import { Icon } from "react-native-elements";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import RegularText from "../../../../typography/regularText";
import { TouchableOpacity } from "react-native-gesture-handler";

type props = NativeStackNavigationProp<RootStackParamList, "CreatePortfolio">;
const ImportData: React.FC<{}> = () => {
  const navigation = useNavigation<props>();
  const [loading, setloading] = useState(false);
  const userTokens = useSelector(
    (store: any) => store?.state?.userReducer?.userToken
  );

  const initialValues = {
    portfolioName: "",
    initialAmount: "",
    discription: "",
  };

  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      enableReinitialize: true,
      validationSchema: createPortfolioValidation,
      onSubmit: () => onSubmit(),
    });

  const onSubmit = () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        addPortfolio();
      } catch (error) {}
    } else {
    }
  };

  const addPortfolio = async () => {
    setloading(true);
    let obj = {
      name: values.portfolioName,
      initial_amount: values.initialAmount,
      description: values.discription,
      date: moment().format("YYYY-MM-DD"),
    };
    let res: any = await API.postData("portfolios/17", obj, userTokens?.access);

    setloading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        backgroundColor="white"
        onBackPress={() => navigation.goBack()}
        textColor="black"
        title="Import Data"
        marginTop={0}
      />
      <View style={styles.innerContainer}>
        <BoldText
          color={colors.primaryBlueBrand}
          fontSize={2}
          label={"Import Data from existing Portfolio"}
          numberOfLines={1}
        />
        <View style={styles.cardContainer}>
          <Icon
            name="upload-cloud"
            type="feather"
            size={responsiveFontSize(4)}
            color={colors.primaryBlueBrand}
          />
          <BoldText
            color={colors.primaryBlueBrand}
            fontSize={2}
            label={"Upload File"}
            numberOfLines={1}
            style={styles.extraMargin}
          />

          <RegularText
            color={colors.primaryBlueBrand}
            fontSize={1.8}
            label={
              "Lorem ipsum dolor sit amet consectetur. Congue leo euismod facilisis id ac sit nisi m"
            }
            style={styles.extraMargin}
            numberOfLines={2}
          />

          <AppButton
            backgroundColor={colors.PrimaryGreenLight}
            disabled={false}
            loading={false}
            loaderColor={colors.primaryBlueBrand}
            marginTop={2}
            onPress={() => {}}
            title="Browse Files"
            width={40}
            hasBorder={true}
            borderColor={colors.primaryBlueBrand}
          />
        </View>
        <TouchableOpacity>
          <RegularText
            color={colors.primaryBlueBrand}
            fontSize={1.8}
            label={"Downland Sample File"}
            style={styles.downloadText}
            numberOfLines={2}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          backgroundColor={colors.white}
          disabled={loading}
          loading={loading}
          loaderColor={colors.primaryBlueBrand}
          marginTop={0}
          onPress={() => navigation.replace("HomeStackScreens")}
          title="Skip"
          width={30}
          hasBorder={true}
          borderColor={colors.primaryBlueBrand}
        />

        <AppButton
          backgroundColor={colors.primaryBlueBrand}
          disabled={false}
          loading={false}
          loaderColor={colors.white}
          marginTop={0}
          onPress={() => navigation.navigate("HomeStackScreens")}
          title="Submit"
          width={60}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImportData;
