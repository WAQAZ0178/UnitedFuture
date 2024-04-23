import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../global/utilities';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: responsiveWidth(100),
    paddingVertical: responsiveHeight(0.5),
    paddingHorizontal: responsiveWidth(3),
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  reloadButton: {
    paddingHorizontal: responsiveWidth(4),
  },

  emptyBox: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  //?=============== notification badge style ====================
  badgeContainer: {
    width: responsiveWidth(4),
    height: responsiveWidth(4),
    borderRadius: responsiveWidth(4),
    backgroundColor: '#DC143C',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 10,
    right: responsiveWidth(-1),
  },
  badgeText: {
    fontSize: responsiveFontSize(1.2),
    fontFamily: fontFamily.appTextRegular,
    color: colors.white,
    // marginTop: responsiveHeight(2),
  },
  //?========================== search  bar style is define  below ==================
  searchInputContainer: {
    width: responsiveWidth(95),
    height: responsiveHeight(4.5),
    paddingRight: responsiveWidth(2),
    borderRadius: responsiveWidth(1),
    paddingLeft: responsiveWidth(2),
    marginVertical: responsiveHeight(1),
    alignSelf: 'center',
    backgroundColor: colors.cloud,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    fontFamily: fontFamily.appTextMedium,
    color: colors.black,
    fontSize: responsiveFontSize(1.8),
  },
});

//make this component available to the app
export default styles;
