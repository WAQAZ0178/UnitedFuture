import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(1),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerContainer: {
    width: responsiveWidth(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlignVertical: 'center',
  },
  iconStyle: {
    marginRight: responsiveWidth(2),
  },
});
export default styles;
