import {StyleSheet, Platform} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../global/utilities';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: responsiveWidth(100),
  },

  inputContainer: {
    width: responsiveWidth(95),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Input: {
    backgroundColor: colors.neutral200,
    width: responsiveWidth(14),
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(2),
    fontSize: responsiveFontSize(2.5),
    color: 'gray',
  },

  //?  otp filed style
  root: {
    flex: 1,
    padding: 20,
  },
  timerContainer: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: responsiveWidth(90),
    marginTop: responsiveHeight(3),
    alignItems: 'flex-start',
  },
  codeFieldRoot: {
    marginTop: responsiveHeight(3),
    alignSelf: 'center',
    marginLeft: responsiveWidth(2),
  },

  cellContainer: {
    marginHorizontal: responsiveWidth(1),
    backgroundColor: colors.neutral200,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(13),
    height: responsiveHeight(8),
    borderRadius: responsiveWidth(2),
  },
  cell: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: responsiveFontSize(2),
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
  focusCell: {
    borderColor: '#000',
    borderWidth: 1,
    // marginHorizontal: responsiveWidth(1),
    // backgroundColor: colors.neutral200,
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: responsiveWidth(13),
    // height: responsiveHeight(8),
    // borderRadius: responsiveWidth(2),
  },
});

export default styles;
