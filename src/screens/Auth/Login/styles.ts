import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONT_SIZES, h, w} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBg,
    flex: 1,
    padding: h('2%'),
    alignItems: 'center',
  },
  title: {
    marginTop: h('5%'),
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  btnContainer: {
    marginTop: h('3%'),
    width: '100%',
  },
  txtError: {
    color: COLORS.redNCS,
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.tiny,
    marginVertical: h('1%'),
    alignSelf: 'flex-end',
  },
  simpleTxt: {
    marginTop: h('8%'),
    marginBottom: h('3%'),
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.small,
    color: COLORS.gray,
  },
  signupView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: h('1.5%'),
  },
  txtAcc: {
    fontFamily: FONTS.regular,
    fontSize: FONT_SIZES.regular,
    color: COLORS.black,
  },
  txtSignup: {
    marginLeft: w('4%'),
    fontFamily: FONTS.medium,
    fontSize: FONT_SIZES.regular,
    color: COLORS.primary1,
  },
});

export default styles;
