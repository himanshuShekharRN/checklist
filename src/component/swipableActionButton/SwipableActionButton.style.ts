import {StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../utils/colors';

export const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: 'transparent',
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  textStyle: {
    color: COLOR_WHITE,
    marginTop: 5,
  },
});
