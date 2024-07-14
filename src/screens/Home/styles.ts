import {StyleSheet} from 'react-native';
import {COLORS, h, w} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A3780',
    flex: 1,
    overflow: 'hidden',
    padding: h('1.5%'),
  },
  bgImg: {
    height: 250,
    width: 250,
    position: 'absolute',
    right: -95,
    top: -95,
    overflow: 'hidden',
  },
  bgLeftImg: {
    height: 250,
    width: 250,
    position: 'absolute',
    left: -115,
    top: 195,
    overflow: 'hidden',
  },
  bottomImg: {
    height: 250,
    width: 250,
    position: 'absolute',
    right: -95,
    bottom: 95,
    overflow: 'hidden',
  },
  taskContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: h('2%'),
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: h('0.8%'),
    color: COLORS.black,
  },
  chatBtn: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: h('0.5%'),
    height: h('8%'),
    width: h('8%'),
    borderRadius: h('5%'),
    position: 'absolute',
    bottom: h('5%'),
    right: h('4%'),
  },

  dropdownButtonStyle: {
    width: w('80%'),
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    height: '40%',
    width: '10%',
    marginRight: h('1%'),
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    height: '80%',
    width: '10%',
    marginRight: h('1%'),
  },
});
