import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../global/utilities';

export default StyleSheet.create({
  container: {
    // width: responsiveWidth(95),
    alignSelf: 'center',
  },

  innerContainer: {
    marginTop: responsiveHeight(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(95),
    height: responsiveHeight(7),
    paddingHorizontal: responsiveWidth(2.5),
  },

  button: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: responsiveWidth(14),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  errorLabel: {
    alignSelf: 'flex-start',
    paddingTop: responsiveHeight(0.5),
    marginBottom: responsiveHeight(0.5),
    marginHorizontal: responsiveWidth(2),
  },

  TxtInput: {
    color: colors.neutral500,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(80),
    textAlign: 'left',
    textAlignVertical: 'center',
    paddingLeft: responsiveWidth(0.5),
    paddingHorizontal: responsiveWidth(2.5),
  },
});
