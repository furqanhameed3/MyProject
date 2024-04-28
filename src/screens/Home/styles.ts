import {StyleSheet} from 'react-native';
import {COLORS, h} from '../../constants';

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
});
