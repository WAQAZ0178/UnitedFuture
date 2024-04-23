import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFormik } from "formik";
import { Switch } from "react-native-paper";
import appReducer from "../../../store/reducers";
import React, { Dispatch, useEffect, useState } from "react";
import { Platform, SafeAreaView, TouchableOpacity, View } from "react-native";
import ReactNativeBiometrics, { BiometryTypes } from "react-native-biometrics";

import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from "react-native-fbsdk";
import {
  AppButton,
  KeyboardAvoidScrollview,
  LogoHeader,
  SocialButton,
  TextInput,
} from "../../../components/general";
import { FingerPrintButton } from "../../../components/itoms";
import { colors } from "../../../global/utilities";
import { API } from "../../../services/apiServices";
import { firebaseServices } from "../../../services/firebase";
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
import { connect, useDispatch } from "react-redux";
import { LoginDispatchProps, LoginStateProps } from "../../../types/authType";
import { ACTIONS } from "../../../store/actions/user";
import { Usertypes as types } from "../../../store/types";
// import { setProfileInfo, setUserToken } from "../../../store/actions/user";
type props = NativeStackNavigationProp<AuthStackParamList, "Login">;

const Login: React.FC<{}> = () => {
  const navigation = useNavigation<props>();
  const dispatch = useDispatch();
  const rnBiometrics = new ReactNativeBiometrics();
  const [googleLoading, setGoogleLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);
  const [facebookLoading, setFcebookLoading] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [localAuthloading, setLocalAuthloading] = useState(false);

  useEffect(() => {
    checkBioMatricEnabling();
  }, []);

  const checkBioMatricEnabling = async () => {
    let isEnable = await getKey("enableBiometric");
    if (isEnable) {
      setIsSwitchOn(true);
    } else {
      setIsSwitchOn(false);
    }
  };

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
      validationSchema: loginValidationSchema,
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
    let obj = {
      email: values.email,
      password: values.password?.trim(),
    };
    let res: any = await API.postData("auth/login", obj);
    if (res?.user) {
      if (isSwitchOn) {
        await storeObject("userCredential", obj);
      }
      dispatchData(res);
      await storeObject("userInfo", res?.user);
      await storeObject("tokens", res?.tokens);
      navigation.navigate("App");
      Toast.showToast("Login", "Login successfully", "success");
    }
    setEmailLoading(false);
  };

  //!============================ if user click on login with facebook
  //!============================ this function will execute and will perfome action
  const onPressFacebookLogin = () => {
    setFcebookLoading(true);

    if (Platform.OS === "android") {
      LoginManager.setLoginBehavior("web_only");
    }

    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      (result) => {
        if (result.isCancelled) {
          // Handle login cancellation
        } else {
          AccessToken.getCurrentAccessToken().then(
            (data: AccessToken | null) => {
              if (data) {
                getInfoFromToken(data.accessToken.toString());
              } else {
                // Handle the case when no access token is available
              }
            }
          );
        }
      },
      (error: string) => {
        let reason = "Login with Facebook failed with error: ";
        console.log(reason + error);
      }
    );

    setFcebookLoading(false);
  };

  //?================== get user info from facebook on basis of token =========================
  const getInfoFromToken = async (token: any) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: "id, name, first_name, last_name",
      },
    };

    const profileRequest = new GraphRequest(
      "/me",
      { token, parameters: PROFILE_REQUEST_PARAMS },
      (error: string, result: any) => {
        if (error) {
          let reason = "Login with Facebook failed with error: ";
          console.log(reason, error);
        } else {
          console.log(result?.id, result?.name);
          // await loginUser(result?.id, result?.name);
        }
      }
    );

    new GraphRequestManager().addRequest(profileRequest).start();
  };

  //! ========================= get ser info with login with google  =========================
  const googleLogin = async () => {
    setGoogleLoading(true);
    let data = await firebaseServices.googleSignin();
    if (data?.hasOwnProperty("email")) {
      let obj = {
        account: {
          provider: "google",
        },
        profile: data,
      };

      let res: any = await API.postData("auth/login-with-google", obj);
      if (res?.user) {
        dispatchData(res);
        await storeObject("userInfo", res?.user);
        await storeObject("tokens", res?.tokens);
        Toast.showToast("Login", "Login successfully", "success");
        navigation.navigate("App");
      } else {
      }
    }
    setGoogleLoading(false);

    // props.navigation.navigate('AboutYou');
  };

  //todo: ========================= here we will check biomatric is available or not  =========================
  const userBioMetricLogin = async () => {
    rnBiometrics.isSensorAvailable().then((resultObject) => {
      const { available, biometryType } = resultObject;

      if (available && biometryType === BiometryTypes.TouchID) {
        console.log("TouchID is supported");
      } else if (available && biometryType === BiometryTypes.FaceID) {
        console.log("FaceID is supported");
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        console.log("Biometrics is supported");
        loginUserWithBioMartic();
      } else {
        Toast.showToast("Error", "Biometrics not supported", "error");
        // console.log('Biometrics not supported');
      }
    });
  };

  const validateUserBiomatric = async () => {
    let response = rnBiometrics.simplePrompt({
      promptMessage: "Confirm fingerprint",
    });
    // .then((resultObject) => {
    //   const {success} = resultObject;
    //   response = success;
    //   if (success) {
    //     console.log('successful biometrics provided', success, resultObject);
    //     return true;
    //   } else {
    //     console.log('user cancelled biometric prompt');
    //     return false;
    //   }
    // })
    // .catch(() => {
    //   console.log('biometrics failed');
    // });

    return response;
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

  //todo: ============================ update authentication flag and update asyncstorage data =======================
  const isLocalAuthenticationEnable = async () => {
    let isEnable = await getKey("enableBiometric");
    if (isEnable) {
      return true;
    } else {
      false;
    }
  };

  //todo: ============================ update authentication flag and update asyncstorage data =======================
  const getAuthenticationData = async () => {
    let userData = await getObject("userCredential");

    if (userData) {
      return userData;
    } else {
      return {};
    }
  };

  const loginUserWithBioMartic = async () => {
    setLocalAuthloading(true);
    let isEnable = await isLocalAuthenticationEnable();
    let userData = await getAuthenticationData();

    if (isEnable && userData.hasOwnProperty("email")) {
      let isValidate = await validateUserBiomatric();
      if (isValidate?.success) {
        let res: any = await API.postData("auth/login", userData);
        dispatchData(res);
        await storeObject("userInfo", res?.user);
        await storeObject("tokens", res?.tokens);
        navigation.navigate("App");
        Toast.showToast("Login", "Login successfully", "success");
      } else if (isValidate.error) {
        Toast.showToast("Login", "Authentication failed", "error");
      }
    } else {
      onToggleSwitch();
      Toast.showToast(
        "info",
        "Please login with credentials to enable Biomatric",
        "info"
      );
    }

    setLocalAuthloading(false);
  };

  const dispatchData = (data: any) => {
    dispatch({ type: types.SET_PROFILE_INFO, payload: data?.user });
    dispatch({ type: types.SET_USER_TOKENS, payload: data?.tokens });
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
            onPress={() => userBioMetricLogin()}
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
          onPressFacebook={() => onPressFacebookLogin()}
          onPressGoogle={() => googleLogin()}
          loaderColor={colors.primaryBlueBrand}
          title="Don’t have an account?"
          linkText=" Signup"
          disabled={false}
          appleLoading={false}
          googleLoading={googleLoading}
          fbLoading={facebookLoading}
          marginTop={5}
        />
      </KeyboardAvoidScrollview>
    </SafeAreaView>
  );
};

const mapStateToProps = (store: any): LoginStateProps => {
  return {
    profileInfo: store?.state?.userReducer.profileInfo,
    userToken: store?.state?.userReducer.userToken,
  };
};

const mapDispatchToProps = {
  setProfileInfo: (payload: any) => ACTIONS.setProfileInfo(payload),
  setUserToken: (payload: any) => ACTIONS.setUserToken(payload),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
