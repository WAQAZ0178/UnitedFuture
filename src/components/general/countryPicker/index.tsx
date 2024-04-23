import React, {useState} from 'react';
import {
  View,
  TextInput,
  KeyboardType,
  TextStyle,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {
  CountryButton,
  CountryItem,
  CountryPicker,
} from 'react-native-country-codes-picker';
import styles from './styles';
import {colors} from '../../../global/utilities';
import SemiBoldText from '../../../typography/semiBoldText';
import {Icon} from 'react-native-elements';
import RegularText from '../../../typography/regularText';
interface CProps {
  onChangeText: (e: string) => void;
  onBlur: () => void;

  placeholder: string;
  value: string;
  error?: string;
  errorStyle: TextStyle;
  setCode: (code: string) => void;
}
const CountryPickerTextInput: React.FC<CProps> = ({
  onChangeText,
  onBlur,

  placeholder,
  value,
  setCode,
  error,
  errorStyle,
}) => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('+92');
  const [flag, setflag] = useState('🇵🇰');

  const onSelectCountry = (item: CountryItem) => {
    setflag(item?.flag);
    setCode(item?.dial_code);
    setCountryCode(item?.dial_code);
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
          <SemiBoldText
            label={flag}
            fontSize={2.5}
            color={colors.primaryBlueBrand}
            numberOfLines={1}
          />
          <Icon
            type="materialicon"
            name="keyboard-arrow-down"
            color={colors.primaryBlueBrand}
            size={responsiveFontSize(3)}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <TextInput
          placeholder={'( ' + countryCode + ' ) ' + placeholder}
          style={styles.TxtInput}
          onChangeText={(txt) => onChangeText(txt)}
          placeholderTextColor={colors.neutral500}
          keyboardType={'phone-pad'}
          // maxLength={maxLength}
          value={value}
          onBlur={onBlur}
        />
      </View>

      <CountryPicker
        show={show}
        lang="en"
        onBackdropPress={() => setShow(false)}
        pickerButtonOnPress={(item) => onSelectCountry(item)}
        initialState={'+92'}
        style={{
          dialCode: {
            color: colors.primaryBlueBrand,
          },
          countryName: {
            color: colors.primaryBlueBrand,
          },
          searchMessageText: {
            color: colors.primaryBlueBrand,
          },
          textInput: {
            color: colors.primaryBlueBrand,
          },
          modal: {
            height: responsiveHeight(50),
          },
        }}
        onRequestClose={() => setShow(false)}
      />

      {error && (
        <RegularText
          label={error ? error : ''}
          style={[styles.errorLabel, errorStyle]}
          numberOfLines={1}
          color={colors.error}
          fontSize={1.6}
        />
      )}
    </View>
  );
};
export default React.memo(CountryPickerTextInput);
