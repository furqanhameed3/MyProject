import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZES, h, shadow} from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBg,
  },
  innerContainer: {
    backgroundColor: COLORS.primary1,
    padding: h('2%'),
  },
  title: {
    color: COLORS.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: h('1%'),
    marginTop: h('3%'),
    marginVertical: h('1%'),
    height: h('6%'),
  },
  messageContainer: {
    paddingHorizontal: h('2%'),
    marginTop: h('1%'),
  },
  messageItem: {
    // backgroundColor: COLORS.primary1,

    padding: h('2%'),
    marginVertical: h('1%'),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  nameTxt: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.medium,
  },
  emailTxt: {
    color: COLORS.gray,
    fontSize: FONT_SIZES.small,
  },
});

export default styles;
