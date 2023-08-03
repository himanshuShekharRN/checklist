import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_GRAY_500, COLOR_NAVY_300} from '../../utils/colors';
import {FONT_12, FONT_14} from '../../utils/fontSize';
import {ROBOTO_BOLD, ROBOTO_REGULAR_ITALIC} from '../../utils/fonts';

export const styles = StyleSheet.create({
  headerComponent: {
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  headerComponentText: {
    color: COLOR_BLACK,
    fontSize: FONT_12,
    fontFamily: ROBOTO_REGULAR_ITALIC,
  },
  status: {
    fontFamily: ROBOTO_BOLD,
    color: COLOR_BLACK,
    fontSize: FONT_14,
  },
  containerStyle: {
    backgroundColor: COLOR_NAVY_300,
    paddingBottom: 80,
  },
  completedSection: {
    paddingVertical: 18,
    paddingLeft: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_GRAY_500,
  },
  completedText: {
    color: COLOR_BLACK,
    fontFamily: ROBOTO_BOLD,
    fontSize: FONT_14,
  },
});
