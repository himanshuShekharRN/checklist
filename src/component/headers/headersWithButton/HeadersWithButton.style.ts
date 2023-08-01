import {StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  svgContainer: {
    backgroundColor: COLOR_WHITE,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
});
