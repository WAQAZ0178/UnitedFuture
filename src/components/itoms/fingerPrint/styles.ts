import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../global/utilities';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(1),
    marginLeft: responsiveWidth(2),
    borderWidth: 1,
    borderColor: colors.primaryBlueBrand,
  },
  fingerIcon: {
    width: responsiveWidth(9),
    height: responsiveHeight(4),
  },
});
export default styles;
