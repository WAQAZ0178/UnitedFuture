import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../global/utilities';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingBottom: responsiveHeight(3),
  },
  mainView: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: responsiveWidth(2),
    resizeMode: 'cover',
  },
  profileView: {
    paddingTop: responsiveHeight(1),
    alignSelf: 'center',
    backgroundColor: '#03222f',
    paddingLeft: responsiveWidth(5),
    width: responsiveWidth(75),
    paddingBottom: responsiveHeight(2),
  },
  nameText: (paddingTop: number) => ({
    paddingTop: responsiveHeight(paddingTop),
  }),

  borderLine: {
    width: responsiveWidth(75),
    backgroundColor: colors.placeHolderLight,
    height: responsiveHeight(0.1),
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(2),
  },
  othersText: {
    width: responsiveWidth(75),
    paddingLeft: responsiveWidth(5),
  },
});

export default styles;
