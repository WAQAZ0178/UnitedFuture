import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import {
  AppButton,
  LogoHeader,
  TextInput,
  KeyboardAvoidScrollview,
  CountryPickerTextInput,
} from "../../../components/general";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../types";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { colors } from "../../../global/utilities";
import { useFormik } from "formik";
import { signupValidationSchema } from "../../../services/validationServices";
import { Toast } from "../../../services/toast";
import { API } from "../../../services/apiServices";
type props = NativeStackNavigationProp<AuthStackParamList, "ProfileInfo">;
type NextScreenProps = {
  route: RouteProp<
    { params: { email: string; accessToken: string } },
    "params"
  >;
};
const ProfileInfo: React.FC<NextScreenProps> = ({ route }) => {
  const navigation = useNavigation<props>();
  const { email, accessToken } = route?.params;
  const [signupLoading, setSignupLoading] = useState(false);
  const [code, setcode] = useState("+92");
  const initialValues = {
    email: email,
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      enableReinitialize: true,
      validationSchema: signupValidationSchema,
      onSubmit: () => onSubmit(),
    });

  const onSubmit = () => {
    signupUser();
    if (isValid && Object.keys(touched).length > 0) {
      try {
        signupUser();
      } catch (error) {}
    } else {
    }
  };

  //! ========================= here i will add login api  for user =========================
  const signupUser = async () => {
    setSignupLoading(true);
    let number = "";
    if (values.phoneNumber?.length > 0) {
      number = code + values.phoneNumber;
    } else {
    }
    let obj = {
      password: values.password,
      first_name: values.name,

      mobile_number:
        values.phoneNumber?.length > 0 ? code + values.phoneNumber : "",
    };
    let res: any = await API.postData("auth/register", obj, accessToken);

    if (res?.success == true) {
      Toast.showToast(
        "Sign Up",
        `${res?.message} please login to continue`,
        "success"
      );
      navigation.replace("Login");
    } else {
      Toast.showToast("Error", `${res?.message}`, "error");
    }
    setSignupLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidScrollview keyboardShouldPersistTaps="handled">
        <LogoHeader
          marginTop={0.5}
          showBackButton={false}
          heading={"Sign Up"}
          subHeading={
            "Your investment world just got simpler. We are here to help!"
          }
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
          editable={false}
          marginTop={2}
        />

        <TextInput
          onChangeText={(str) => setFieldValue("name", str)}
          onBlur={() => setFieldTouched("name", true)}
          value={values.name}
          error={touched.name && errors?.name ? errors.name : undefined}
          onPress={() => {}}
          errorStyle={{}}
          placeholder="Full Name"
          keyboardType="default"
          label=""
          isPassword={false}
          multiline={false}
          maxLength={50}
          numofline={1}
          editable={true}
          marginTop={1}
        />

        <CountryPickerTextInput
          onChangeText={(str) => setFieldValue("phoneNumber", str)}
          onBlur={() => setFieldTouched("phoneNumber", true)}
          value={values.phoneNumber}
          error={
            touched.phoneNumber && errors?.phoneNumber
              ? errors.phoneNumber
              : undefined
          }
          placeholder="***********"
          errorStyle={{}}
          setCode={setcode}
        />

        <TextInput
          onChangeText={(str) => setFieldValue("password", str)}
          onBlur={() => setFieldTouched("password", true)}
          value={values.password}
          error={
            touched.password && errors?.password ? errors.password : undefined
          }
          onPress={() => {}}
          errorStyle={{}}
          placeholder="Password"
          keyboardType="default"
          label=""
          isPassword={true}
          multiline={false}
          maxLength={12}
          numofline={1}
          editable={true}
          marginTop={1}
        />
        <TextInput
          onChangeText={(str) => setFieldValue("confirmPassword", str)}
          onBlur={() => setFieldTouched("confirmPassword", true)}
          value={values.confirmPassword}
          error={
            touched.confirmPassword && errors?.confirmPassword
              ? errors.confirmPassword
              : undefined
          }
          onPress={() => {}}
          errorStyle={{}}
          placeholder="confirmPassword"
          keyboardType="default"
          label=""
          isPassword={true}
          multiline={false}
          maxLength={12}
          numofline={1}
          editable={true}
          marginTop={1}
        />

        <AppButton
          backgroundColor={colors.primaryBlueBrand}
          disabled={signupLoading}
          loaderColor={colors.white}
          loading={signupLoading}
          marginTop={25}
          onPress={() => onSubmit()}
          title="Sign Up"
          width={95}
        />
      </KeyboardAvoidScrollview>
    </SafeAreaView>
  );
};

export default ProfileInfo;
