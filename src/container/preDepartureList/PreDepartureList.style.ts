import {StyleSheet} from 'react-native';
import {ROBOTO_BOLD, ROBOTO_REGULAR} from '../../utils/fonts';
import {FONT_14} from '../../utils/fontSize';

export const styles = StyleSheet.create({
  cardSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {fontFamily: ROBOTO_BOLD},
  textStyle: {
    marginLeft: 12,
    fontSize: FONT_14,
    fontFamily: ROBOTO_REGULAR,
  },
});
