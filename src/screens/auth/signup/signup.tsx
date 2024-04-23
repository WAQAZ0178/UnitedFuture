//import liraries
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import {
  AppButton,
  LogoHeader,
  SocialButton,
  TextInput,
  KeyboardAvoidScrollview,
  CountryPickerTextInput,
} from "../../../components/general";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import RegularText from "../../../typography/regularText";
import { colors } from "../../../global/utilities";
import { useFormik } from "formik";
import {
  emailValidation,
  signupValidationSchema,
} from "../../../services/validationServices";
import BoldText from "../../../typography/boldText";
import { Toast } from "../../../services/toast";
import { API } from "../../../services/apiServices";
type props = NativeStackNavigationProp<AuthStackParamList, "SignUp">;

const SignUp: React.FC<{}> = () => {
  const navigation = useNavigation<props>();
  const [signupLoading, setSignupLoading] = useState(false);
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
        verifyEmail();
      } catch (error) {}
    } else {
    }
  };

  //! ========================= here i will add login api  for user =========================
  const verifyEmail = async () => {
    setSignupLoading(true);

    let res: any = await API.getData(`${values.email}`);
    if (res?.is_new_user == true) {
      let otpRes: any = await API.postData("auth/send-otp", {
        email: values.email,
      });

      navigation.navigate("OTP", {
        email: values.email,
        isSignUp: true,
      });
    } else {
      Toast.showToast(
        "Info",
        "Email already Exits please Login to continue ",
        "info"
      );
      navigation.navigate("Login");
    }

    // if (res?.user) {
    //   navigation.navigate('App');
    //   Toast.showToast('Login', 'Login successfully', 'success');
    // }
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
          editable={true}
          marginTop={2}
        />

        <AppButton
          backgroundColor={colors.primaryBlueBrand}
          disabled={signupLoading}
          loaderColor={colors.white}
          loading={signupLoading}
          marginTop={30}
          onPress={() => {
            onSubmit(), setFieldTouched("email", true);
          }}
          title="Sign Up"
          width={95}
        />
        <TouchableOpacity onPress={() => {}} style={styles.termAndCondition}>
          <RegularText
            label={"By Signing Up, you agree to our "}
            fontSize={1.8}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
          />
          <BoldText
            label={"terms & conditions"}
            fontSize={1.8}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
          />
        </TouchableOpacity>

        <SocialButton
          onPressLink={() => navigation.goBack()}
          onPressApple={() => {}}
          onPressFacebook={() => {}}
          onPressGoogle={() => {}}
          loaderColor={colors.primaryBlueBrand}
          title="Alread have an account?"
          linkText="Log In"
          disabled={false}
          appleLoading={false}
          googleLoading={false}
          fbLoading={false}
          marginTop={4}
        />
      </KeyboardAvoidScrollview>
    </SafeAreaView>
  );
};

export default SignUp;
