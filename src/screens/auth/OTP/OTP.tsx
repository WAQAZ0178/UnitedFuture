import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./styles";
type props = NativeStackNavigationProp<AuthStackParamList, "OTP">;
type NextScreenProps = {
  route: RouteProp<
    { params: { email: string; otp: string; isSignUp: boolean } },
    "params"
  >;
};
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { AuthStackParamList } from "../../../types";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { AppButton, LogoHeader } from "../../../components/general";
import { colors } from "../../../global/utilities";
import SemiBoldText from "../../../typography/semiBoldText";
import RegularText from "../../../typography/regularText";
import { API } from "../../../services/apiServices";
import { Toast } from "../../../services/toast";

const OTP: React.FC<NextScreenProps> = ({ route }) => {
  const navigation = useNavigation<props>();
  const { email, isSignUp } = route?.params;
  const CELL_COUNT = 6;
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [counter, setCounter] = useState(59);
  const [loading, setLoading] = useState(false);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const verifyOTP = async () => {
    setLoading(true);
    let obj = {
      email: email,
      otp: value,
    };
    let response: any = await API.postData("auth/verify-otp", obj);
    let token = response?.tokens?.access;
    if (response?.tokens?.access) {
      if (isSignUp) {
        navigation.navigate("ProfileInfo", {
          email: email,
          accessToken: token,
        });
      } else {
        navigation.navigate("ResetPassword", {
          email: email,
          accessToken: token,
        });
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    if (counter == 0) {
      // setCounter(59);
    }
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  async function confirmCode() {
    setCounter(59);
  }
  const resendCode = async () => {
    let otpRes: any = await API.postData("send-otp", { email: email });
    Toast.showToast("Info", "OTP Send", "info");
    setCounter(59);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LogoHeader
        marginTop={0.5}
        showBackButton={true}
        onPressBack={() => navigation.goBack()}
        heading={"Verify your email"}
        subHeading={`A code is sent to  ${email} for verification`}
      />

      <View style={styles.inputContainer}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              style={[styles.cellContainer, isFocused && styles.focusCell]}
              key={index}
              onLayout={getCellOnLayoutHandler(index)}
            >
              <Text style={styles.cell}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.timerContainer}>
        {counter > 0 ? (
          <RegularText
            fontSize={2}
            numberOfLines={1}
            label={`Resend code in : ${counter} seconds`}
            color={colors.primaryBlueBrand}
          />
        ) : null}
        <TouchableOpacity
          onPress={() => resendCode()}
          disabled={counter > 0 ? true : false}
        >
          <SemiBoldText
            fontSize={1.9}
            numberOfLines={1}
            label={"Resend Again?"}
            color={counter == 0 ? colors.primaryBlueBrand : colors.gray400}
          />
        </TouchableOpacity>
      </View>

      <AppButton
        backgroundColor={colors.primaryBlueBrand}
        disabled={loading}
        loading={loading}
        loaderColor={colors.white}
        marginTop={45}
        onPress={() => verifyOTP()}
        title="Verify"
        width={95}
      />
    </SafeAreaView>
  );
};

export default OTP;
