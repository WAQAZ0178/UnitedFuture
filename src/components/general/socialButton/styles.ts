import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';

const styles = StyleSheet.create({
  container: (marginTop: number) => ({
    marginTop: responsiveHeight(marginTop),
    width: responsiveWidth(80),
    alignSelf: 'center',
    // position: 'absolute',
    // bottom:responsiveHeight(marginBottom)
  }),

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(4),
  },
  button: {
    height: responsiveHeight(6),
    width: responsiveHeight(6),
    borderRadius: responsiveHeight(6 / 2),
    backgroundColor: colors.neutral100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },

  iconStyle: {
    width: responsiveHeight(3.2),
    height: responsiveHeight(3.2),
  },

  orContainer: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(90),
    alignSelf: 'center',
    backgroundColor: colors.neutral200,
  },
  orInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: responsiveWidth(9),
    width: responsiveWidth(9),
    borderRadius: responsiveWidth(4.5),
    position: 'absolute',
    alignSelf: 'center',
    top: responsiveWidth(-4),
  },
});
export default styles;
