import {StyleSheet} from 'react-native';
import {COLOR_DASHED} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gradientContainer: {
    height: 10,
  },
  linearGradient: {
    flex: 1,
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  view: {
    flex: 1,
    backgroundColor: 'transparent',
    height: 9,
    borderWidth: 1,
    borderBottomEndRadius: 8,
    borderTopEndRadius: 8,
    borderColor: COLOR_DASHED,
    borderStyle: 'dashed',
  },
});
