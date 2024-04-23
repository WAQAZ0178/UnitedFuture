import React, { useState } from "react";
import {
  View,
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
import RegularText from "../../../typography/regularText";
import { TouchableOpacity } from "react-native-gesture-handler";
interface CProps {
  onChangeText: (e: string) => void;
  onBlur: () => void;
  keyboardType: KeyboardType;
  multiline: boolean;
  editable: boolean;
  maxLength: number;
  numofline: number;
  marginTop: number;
  placeholder: string;
  label: string;
  value: string;
  error?: string;
  isDropDown: boolean;

  // ...otherProps
}

interface disbaleCProps {
  marginTop: number;
  placeholder: string;
  label: string;
  value: string;
  error?: string;
  isDropDown: boolean;
  onPress: () => void;
  loading: boolean;
  // ...otherProps
}

const AddTradeTextInput: React.FC<CProps> = ({
  onChangeText,
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
  marginTop = 0,
  isDropDown = false,

  // ...otherProps
}) => {
  const containerStyle = {
    marginTop: responsiveHeight(marginTop),
  };

  return (
    <View style={[styles.mainView, containerStyle]}>
      <View style={[styles.innerContainer]}>
        <RegularText
          label={label}
          fontSize={2}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
          style={styles.labelText}
        />
        <TextInput
          editable={editable}
          placeholder={placeholder}
          style={styles.TxtInput}
          onChangeText={(txt) => onChangeText(txt)}
          placeholderTextColor={colors.neutral500}
          keyboardType={keyboardType}
          maxLength={maxLength}
          numberOfLines={numofline}
          multiline={multiline}
          value={value}
          onBlur={onBlur}
          // {...otherProps}
        />
        {isDropDown ? (
          <Icon
            name="keyboard-arrow-down"
            type="material-icon"
            size={responsiveFontSize(2.5)}
            color={colors.primaryBlueBrand}
          />
        ) : null}
      </View>

      {error && (
        <Regular
          label={error ? error : ""}
          style={[styles.errorLabel]}
          numberOfLines={1}
          color={colors.error}
          fontSize={1.6}
        />
      )}
    </View>
  );
};

export const DisableTradeTextInput: React.FC<disbaleCProps> = ({
  placeholder,
  label,
  value,
  error,
  marginTop = 0,
  isDropDown = false,
  onPress,
  loading,
}) => {
  const containerStyle = {
    marginTop: responsiveHeight(marginTop),
  };

  return (
    <View style={[styles.mainView, containerStyle]}>
      <TouchableOpacity
        disabled={loading}
        onPress={onPress}
        style={styles.innerContainer}
      >
        <RegularText
          label={label}
          fontSize={2}
          color={colors.primaryBlueBrand}
          numberOfLines={1}
          style={styles.labelText}
        />

        {loading ? (
          <RegularText
            label={"Loading Please Wait"}
            fontSize={2}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
          />
        ) : (
          <RegularText
            label={value ? value : placeholder}
            fontSize={2}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
          />
        )}

        {isDropDown ? (
          <Icon
            name="keyboard-arrow-down"
            type="material-icon"
            size={responsiveFontSize(2.5)}
            color={colors.primaryBlueBrand}
          />
        ) : null}
      </TouchableOpacity>

      {error && (
        <Regular
          label={error ? error : ""}
          style={[styles.errorLabel]}
          numberOfLines={1}
          color={colors.error}
          fontSize={1.6}
        />
      )}
    </View>
  );
};
export const NotesTextInput: React.FC<CProps> = ({
  onChangeText,
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
  marginTop = 0,
  // ...otherProps
}) => {
  const containerStyle = {
    marginTop: responsiveHeight(marginTop),
  };

  return (
    <View style={[styles.mainView, containerStyle]}>
      <RegularText
        label={label}
        fontSize={2}
        color={colors.primaryBlueBrand}
        numberOfLines={1}
        style={styles.notesLable}
      />
      <View style={[styles.innerContainer]}>
        <TextInput
          editable={editable}
          placeholder={placeholder}
          style={styles.notesInput}
          onChangeText={(txt) => onChangeText(txt)}
          placeholderTextColor={colors.neutral500}
          keyboardType={keyboardType}
          maxLength={maxLength}
          numberOfLines={numofline}
          multiline={multiline}
          value={value}
          onBlur={onBlur}
          // {...otherProps}
        />
      </View>

      {error && (
        <Regular
          label={error ? error : ""}
          style={[styles.errorLabel]}
          numberOfLines={1}
          color={colors.error}
          fontSize={1.6}
        />
      )}
    </View>
  );
};

export default React.memo(AddTradeTextInput);
