import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors, fontFamily} from '../../../global/utilities';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sliderImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(45),
    marginTop:
      Platform.OS == 'android' ? responsiveHeight(-20) : responsiveHeight(-25),
    // borderWidth: 1,
    // borderColor: 'red',
  },
  titleText: {
    color: colors.primaryBlueBrand,
    fontFamily: fontFamily.appTextBold,
    width: responsiveWidth(95),
    fontSize: responsiveFontSize(2.4),
    paddingLeft: responsiveWidth(3),
    paddingBottom: 0,
    textAlign: 'left',
    // marginTop: responsiveHeight(-5),
  },
  subTitle: {
    color: colors.neutral600,
    fontFamily: fontFamily.appTextRegular,
    fontSize: responsiveFontSize(2),
    width: responsiveWidth(95),
    paddingTop: responsiveHeight(1),
    paddingLeft: responsiveWidth(3),
    paddingBottom: 0,
    textAlign: 'left',
  },

  skipButton: {
    position: 'absolute',
    bottom: responsiveWidth(2),
    left: responsiveWidth(5),
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: colors.neutral200,
  },

  getStartedButton: {
    position: 'absolute',
    bottom: responsiveWidth(2),
    right: responsiveWidth(5),
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: colors.neutral200,
  },
  nextButton: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.PrimaryBlue100,
    position: 'absolute',
    bottom: responsiveHeight(10),
    right: responsiveWidth(5),
  },

  PreviousButton: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.PrimaryBlue100,
  },

  continuebtnText: {
    fontfamily: fontFamily.appTextRegular,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: colors.white,
  },

  dotContainer: {
    // position: 'absolute',
    // width: responsiveWidth(20),
    position: 'relative',
    bottom: responsiveHeight(11.5),
  },
  dot: {
    width: responsiveWidth(2.5), // Customize dot width
    height: responsiveWidth(2.5), // Customize dot height
    borderRadius: responsiveWidth(2.5), // Make it a circle
    marginHorizontal: 5, // Adjust spacing between dots
    backgroundColor: colors.PrimaryBlue100,
  },
  activeDot: {
    width: responsiveWidth(7), // Customize dot width
    height: responsiveWidth(2.5), // Customize dot height
    borderRadius: responsiveWidth(3.5), // Make it a circle
    backgroundColor: colors.primaryBlueBrand,
    marginHorizontal: 5,
  },
});
export default styles;
