import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topContainer: {
    alignItems: 'center',
  },
  logo: {
    width: responsiveWidth(50),
    height: responsiveWidth(35),
  },
  messageText: {
    paddingTop: responsiveHeight(2),
  },

  bottomContainer: {
    alignItems: 'center',
    marginBottom: responsiveHeight(4),
  },

  companyNametext: {
    paddingTop: responsiveHeight(0.8),
  },
});

export default styles;
