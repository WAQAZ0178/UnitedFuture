import {StyleSheet} from 'react-native';
import {colors} from '../../../global/utilities';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    // marginTop: responsiveHeight(marginTop),
  },

  logoInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: responsiveWidth(94),
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: responsiveWidth(25),
  },

  backText: {
    paddingLeft: responsiveWidth(1),
  },
  emptyBox: {
    width: responsiveWidth(25),
  },

  innerContainer: {
    width: responsiveWidth(95),
    marginTop: responsiveHeight(3),
    paddingLeft: responsiveWidth(1),
  },

  headingTetx: {
    textAlign: 'left',
  },
  subHeading: {
    paddingTop: responsiveHeight(0.5),
    textAlign: 'left',
    paddingRight: responsiveWidth(5),
  },
  logo: {
    width: responsiveWidth(40),
    height: responsiveWidth(12),
    alignItems: 'center',
  },
});

export default styles;
