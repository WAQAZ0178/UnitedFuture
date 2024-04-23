import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFormik } from "formik";
import { Switch } from "react-native-paper";
import React, { Dispatch, useEffect, useState } from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import {
  AppButton,
  KeyboardAvoidScrollview,
  LogoHeader,
  SocialButton,
  TextInput,
} from "../../../components/general";
import { FingerPrintButton } from "../../../components/itoms";
import { colors } from "../../../global/utilities";
import {
  deleteKey,
  getKey,
  getObject,
  setKey,
  storeObject,
} from "../../../services/storageServices";
import { Toast } from "../../../services/toast";
import { loginValidationSchema } from "../../../services/validationServices";
import { AuthStackParamList } from "../../../types";
import RegularText from "../../../typography/regularText";
import styles from "./styles";
import { useDispatch } from "react-redux";

import { ACTIONS } from "../../../store/actions/user";
import { Usertypes as types } from "../../../store/types";
import { useAppContext } from "../../../context/appContext";

const Login = () => {
  const navigation = useNavigation();
  const [emailLoading, setEmailLoading] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [localAuthloading, setLocalAuthloading] = useState(false);
  const { state, dispatch } = useAppContext();
  const [userList, setUserList] = useState(state.userList);

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      enableReinitialize: true,

      onSubmit: () => onSubmit(),
    });

  const onSubmit = () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        loginUser();
      } catch (error) {}
    } else {
    }
  };

  //! ========================= here i will add login api  for user =========================
  const loginUser = async () => {
    setEmailLoading(true);
    let list = userList;
    const user = list.find((user) => {
      return values.email === user.email && values.password === user?.password;
    });

    console.log("====================================");
    console.log(user);
    console.log("====================================");
    if (user) {
      await storeObject("userInfo", user);
      navigation.navigate("App");
    } else {
      Toast.showToast("sorry User Not exist ");
    }

    setEmailLoading(false);
  };

  //todo: ============================ update authentication flag and update asyncstorage data =======================
  const onToggleSwitch = async () => {
    if (isSwitchOn == true) {
      await deleteKey("enableBiometric");
    } else {
      await setKey("enableBiometric", "true");
    }
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidScrollview keyboardShouldPersistTaps="handled">
        <LogoHeader
          marginTop={0.5}
          heading={"Login to Your Account"}
          subHeading={"Enter your email and Password to login to your account"}
          showBackButton={false}
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
        <TextInput
          onChangeText={(str) => {
            setFieldValue("password", str), setFieldTouched("password", true);
          }}
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
          marginTop={2}
        />
        <View style={styles.forgetPasswordButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgetPassword")}
          >
            <RegularText
              label={"Forgot Password?"}
              fontSize={1.8}
              color={colors.primaryBlueBrand}
              numberOfLines={1}
              maxWidth={50}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.fingerAuthContainer}>
          <AppButton
            backgroundColor={colors.primaryBlueBrand}
            disabled={emailLoading}
            loading={emailLoading}
            loaderColor={colors.white}
            marginTop={0}
            onPress={() => onSubmit()}
            title="Login"
            width={80}
          />
          <FingerPrintButton
            disabled={localAuthloading}
            loading={localAuthloading}
            onPress={() => {}}
          />
        </View>
        <View style={styles.fingerPrintCheckbox}>
          <RegularText
            label={"Biometric login"}
            fontSize={1.8}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
            style={styles.fingerPrintText}
            maxWidth={50}
          />
          <Switch
            // color={colors.primaryBlueBrand}
            thumbColor={colors.white}
            // ios_backgroundColor={colors.primaryBlueBrand}
            value={isSwitchOn}
            trackColor={{
              true: colors.primaryBlueBrand,
              false: colors.gray500,
            }}
            onValueChange={onToggleSwitch}
          />
        </View>
        <SocialButton
          onPressLink={() => navigation.navigate("SignUp")}
          onPressApple={() => {}}
          onPressFacebook={() => {}}
          onPressGoogle={() => {}}
          loaderColor={colors.primaryBlueBrand}
          title="Don’t have an account?"
          linkText=" Signup"
          disabled={false}
          appleLoading={false}
          googleLoading={false}
          fbLoading={false}
          marginTop={5}
        />
      </KeyboardAvoidScrollview>
    </SafeAreaView>
  );
};

export default Login;
