import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import {
  AppButton,
  LogoHeader,
  TextInput,
  KeyboardAvoidScrollview,
} from "../../../components/general";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../types";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { colors } from "../../../global/utilities";
import { useFormik } from "formik";
import { resetPasswordSchema } from "../../../services/validationServices";
import { API } from "../../../services/apiServices";
import { Toast } from "../../../services/toast";

type props = NativeStackNavigationProp<AuthStackParamList, "ResetPassword">;
type NextScreenProps = {
  route: RouteProp<
    { params: { email: string; accessToken: string } },
    "params"
  >;
};

const ResetPassword: React.FC<NextScreenProps> = ({ route }) => {
  const navigation = useNavigation<props>();
  const { email, accessToken } = route.params;
  const [loading, setLoading] = useState(false);

  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      enableReinitialize: true,
      validationSchema: resetPasswordSchema,
      onSubmit: () => onSubmit(),
    });

  const onSubmit = () => {
    if (isValid && Object.keys(touched).length > 0) {
      try {
        changePassword();
      } catch (error) {}
    } else {
    }
  };

  //! ========================= here i will add login api  for user =========================
  const changePassword = async () => {
    setLoading(true);
    let obj = {
      password: values.password,
    };
    let res: any = await API.postData("auth/reset-password", obj, accessToken);

    if (res?.message) {
      Toast.showToast(
        "Sign Up",
        `${res?.message} please login to continue `,
        "success"
      );
      navigation.replace("Login");
    }
    setLoading(false);
    // navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidScrollview keyboardShouldPersistTaps="handled">
        <LogoHeader
          marginTop={2}
          heading={"Reset Password"}
          showBackButton={true}
          onPressBack={() => navigation.goBack()}
          subHeading={`Enter new Password for the account linked to ${email}`}
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
          marginTop={1.5}
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
          placeholder="confirm Password"
          keyboardType="default"
          label=""
          isPassword={true}
          multiline={false}
          maxLength={12}
          numofline={1}
          editable={true}
          marginTop={1.5}
        />

        <AppButton
          backgroundColor={colors.primaryBlueBrand}
          disabled={loading}
          loaderColor={colors.white}
          loading={loading}
          marginTop={45}
          onPress={() => onSubmit()}
          title="Sign Up"
          width={95}
        />
      </KeyboardAvoidScrollview>
    </SafeAreaView>
  );
};

export default ResetPassword;
