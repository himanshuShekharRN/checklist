import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_GREY_600} from '../../utils/colors';
import {FONT_12, FONT_14} from '../../utils/fontSize';
import {ROBOTO_REGULAR} from '../../utils/fonts';

export const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkListTitle: {
    color: COLOR_BLACK,
    fontSize: FONT_14,
    fontFamily: ROBOTO_REGULAR,
  },
  listInfoText: {
    fontSize: FONT_12,
    color: COLOR_GREY_600,
    fontFamily: ROBOTO_REGULAR,
    flex: 1,
  },
  listInfoTextContainer: {
    marginTop: 6,
    flex: 1,
  },
  separator: {
    height: 8,
  },
  emptyContentContainer: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: FONT_12,
    fontFamily: ROBOTO_REGULAR,
    color: COLOR_BLACK,
    textAlign: 'left',
  },
});
