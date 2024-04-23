import {StyleSheet} from 'react-native';
import {colors} from '../../../global/utilities';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  termAndCondition: {
    width: responsiveWidth(90),
    marginTop: responsiveHeight(1.5),
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingLeft: responsiveWidth(2),
  },
});

export default styles;
