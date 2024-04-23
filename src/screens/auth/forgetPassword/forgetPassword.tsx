import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import {
  AppButton,
  KeyboardAvoidScrollview,
  LogoHeader,
  TextInput,
} from "../../../components/general";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../global/utilities";
import { useFormik } from "formik";
import { emailValidation } from "../../../services/validationServices";
import { Toast } from "../../../services/toast";
import { API } from "../../../services/apiServices";
type props = NativeStackNavigationProp<AuthStackParamList, "ForgetPassword">;

const ForgetPassword: React.FC<{}> = () => {
  const navigation = useNavigation<props>();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    email: "",
  };

  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      enableReinitialize: true,
      validationSchema: emailValidation,
      onSubmit: () => onSubmit(),
    });

  const onSubmit = () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        verifyUserEmail();
      } catch (error) {}
    } else {
    }
  };

  //! ========================= here i will add login api  for user =========================
  const verifyUserEmail = async () => {
    setLoading(true);
    let obj = {
      email: values.email,
    };
    let res: any = await API.postData("auth/forgot-password", obj);

    setLoading(false);
    navigation.navigate("OTP", {
      email: values.email,
      isSignUp: false,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidScrollview keyboardShouldPersistTaps="handled">
        <LogoHeader
          marginTop={0.5}
          showBackButton={true}
          heading={"Forgot Password"}
          onPressBack={() => navigation.goBack()}
          subHeading={"Enter your email to receive a Verification code"}
        />
        <TextInput
          onChangeText={(str) => {
            setFieldValue("email", str), setFieldTouched("email", true);
          }}
          onBlur={() => setFieldTouched("email", true)}
          value={values.email}
          error={touched.email && errors?.email ? errors.email : undefined}
          onPress={() => {}}
          errorStyle={{}}
          placeholder="Email"
          keyboardType="email-address"
          label=""
          isPassword={false}
          multiline={false}
          maxLength={50}
          numofline={1}
          editable={true}
          marginTop={3}
        />

        <AppButton
          backgroundColor={colors.primaryBlueBrand}
          loaderColor={colors.white}
          onPress={() => onSubmit()}
          title="Continue"
          disabled={loading}
          loading={loading}
          marginTop={55}
          width={95}
        />
      </KeyboardAvoidScrollview>
    </SafeAreaView>
  );
};

export default ForgetPassword;
