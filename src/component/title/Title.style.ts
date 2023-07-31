import {StyleSheet} from 'react-native';
import {COLOR_BLACK} from '../../utils/colors';
import {FONT_12, FONT_16} from '../../utils/fontSize';
import {ROBOTO_MEDIUM, ROBOTO_REGULAR_ITALIC} from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  title: {
    fontSize: FONT_16,
    color: COLOR_BLACK,
    fontFamily: ROBOTO_MEDIUM,
    textAlign: 'left',
  },
  subTitle: {
    fontSize: FONT_12,
    color: COLOR_BLACK,
    textAlign: 'left',
    fontFamily: ROBOTO_REGULAR_ITALIC,
    marginTop: 4,
  },
});
