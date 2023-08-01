import {StyleSheet} from 'react-native';
import {COLOR_TEAL, COLOR_WHITE} from '../../../utils/colors';
import {ROBOTO_BOLD} from '../../../utils/fonts';
import {FONT_14} from '../../../utils/fontSize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_TEAL,
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: COLOR_WHITE,
    fontFamily: ROBOTO_BOLD,
    fontSize: FONT_14,
  },
});
