import {StyleSheet} from 'react-native';
import {COLOR_TEAL, COLOR_WHITE} from '../../../utils/colors';
import {ROBOTO_BOLD} from '../../../utils/fonts';
import {FONT_14} from '../../../utils/fontSize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_TEAL,
    borderRadius: 30,
    width: '33%',
    height: 45,
    justifyContent: 'center',
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: ROBOTO_BOLD,
    fontSize: FONT_14,
    textAlign: 'center',
  },
});
