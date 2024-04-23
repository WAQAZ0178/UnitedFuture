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
import { AxiosResponse } from "axios";

type props = NativeStackNavigationProp<RootStackParamList, "CreatePortfolio">;
const CreatePortfolio: React.FC<{}> = () => {
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
    navigation.replace("ImportData");
    setloading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidScrollview keyboardShouldPersistTaps="handled">
        <AuthHeader
          backgroundColor="white"
          onBackPress={() => navigation.goBack()}
          textColor="black"
          title="Create Portfolio"
          marginTop={0}
        />
        <TextInput
          onChangeText={(str) => {
            setFieldValue("portfolioName", str),
              setFieldTouched("portfolioName", true);
          }}
          onBlur={() => setFieldTouched("portfolioName", true)}
          value={values.portfolioName}
          error={
            touched.portfolioName && errors?.portfolioName
              ? errors.portfolioName
              : undefined
          }
          onPress={() => {}}
          errorStyle={{}}
          placeholder="E.g My Savings "
          keyboardType="default"
          label="Portfolio Name"
          isPassword={false}
          multiline={false}
          maxLength={100}
          numofline={1}
          editable={true}
          marginTop={3}
        />

        <TextInput
          onChangeText={(str) => {
            setFieldValue("initialAmount", str),
              setFieldTouched("initialAmount", true);
          }}
          onBlur={() => setFieldTouched("initialAmount", true)}
          value={values.initialAmount}
          error={
            touched.initialAmount && errors?.initialAmount
              ? errors.initialAmount
              : undefined
          }
          onPress={() => {}}
          errorStyle={{}}
          placeholder="Type in PKR"
          keyboardType="decimal-pad"
          label="Initial Amount"
          isPassword={false}
          multiline={false}
          maxLength={7}
          numofline={1}
          editable={true}
          marginTop={2}
        />

        <TextInput
          onChangeText={(str) => setFieldValue("discription", str)}
          onBlur={() => setFieldTouched("discription", true)}
          value={values.discription}
          error={
            touched.discription && errors?.discription
              ? errors.discription
              : undefined
          }
          onPress={() => {}}
          errorStyle={{}}
          placeholder="Add brief description about what this portfolio is for"
          keyboardType="default"
          label="Add Discription"
          isPassword={false}
          multiline={true}
          maxLength={100}
          numofline={3}
          editable={true}
          marginTop={2}
        />

        <View style={styles.buttonContainer}>
          <AppButton
            backgroundColor={colors.white}
            disabled={false}
            loading={false}
            loaderColor={colors.primaryBlueBrand}
            marginTop={0}
            onPress={() => navigation.goBack()}
            title="Discard"
            width={30}
            hasBorder={true}
            borderColor={colors.primaryBlueBrand}
          />

          <AppButton
            backgroundColor={colors.primaryBlueBrand}
            disabled={loading}
            loading={loading}
            loaderColor={colors.white}
            marginTop={0}
            onPress={() => onSubmit()}
            title="Submit"
            width={60}
          />
        </View>
      </KeyboardAvoidScrollview>
    </SafeAreaView>
  );
};

export default CreatePortfolio;
