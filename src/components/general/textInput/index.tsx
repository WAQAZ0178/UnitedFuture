import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  KeyboardType,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Icon } from "react-native-elements";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import styles from "./styles";
import Regular from "../../../typography/regularText";
import { colors } from "../../../global/utilities";
import SemiBoldText from "../../../typography/semiBoldText";
interface CProps {
  onChangeText: (e: string) => void;
  onPress: () => void;
  onBlur: () => void;
  keyboardType: KeyboardType;
  multiline: boolean;
  editable: boolean;
  isPassword: boolean;
  maxLength: number;
  numofline: number;
  marginTop: number;
  placeholder: string;
  label?: string;
  value: string;
  error?: string;
  errorStyle: TextStyle;

  // ...otherProps
}
const CustomTextInput: React.FC<CProps> = ({
  onChangeText,
  onPress,
  onBlur,

  placeholder,
  label,
  value,
  keyboardType,
  maxLength,
  numofline,
  error,
  multiline,
  editable = true,
  errorStyle,
  marginTop = 0,
  isPassword,
  // ...otherProps
}) => {
  const [secure, setSecure] = useState(true);

  const containerStyle = {
    marginTop: responsiveHeight(marginTop),
  };
  const TextBox = {
    height: multiline ? responsiveHeight(15) : responsiveHeight(7),
    alignItems: multiline ? "fle-start" : "center",
  };

  return (
    <View style={[styles.mainView, containerStyle]}>
      {label ? (
        <SemiBoldText
          label={label}
          fontSize={2}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
          style={styles.labelText}
        />
      ) : null}
      <View style={[styles.innerContainer, TextBox as ViewStyle]}>
        <TextInput
          editable={editable}
          placeholder={placeholder}
          style={styles.TxtInput}
          onChangeText={(txt) => onChangeText(txt)}
          placeholderTextColor={colors.neutral500}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          maxLength={maxLength}
          numberOfLines={numofline}
          multiline={multiline}
          value={value}
          onBlur={onBlur}
          // {...otherProps}
        />
        {isPassword ? (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}
          >
            <Icon
              name={secure ? "eye-with-line" : "eye"}
              type={"entypo"}
              color={colors.primaryBlueBrand}
              size={responsiveFontSize(2.5)}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {error && (
        <Regular
          label={error ? error : ""}
          style={[styles.errorLabel, errorStyle]}
          numberOfLines={1}
          color={colors.error}
          fontSize={1.6}
        />
      )}
    </View>
  );
};
export default React.memo(CustomTextInput);
