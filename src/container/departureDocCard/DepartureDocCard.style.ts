import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_GRAY_500, COLOR_GREY_700} from '../../utils/colors';
import {ROBOTO_REGULAR} from '../../utils/fonts';
import {FONT_12} from '../../utils/fontSize';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLOR_GRAY_500,
  },
  documentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: 16,
  },
  document: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },

  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  dateText: {
    marginTop: 8,
    color: COLOR_GREY_700,
    fontFamily: ROBOTO_REGULAR,
    fontSize: FONT_12,
  },
  nationality: {
    marginTop: 2,
  },
  documentText: {
    fontFamily: ROBOTO_REGULAR,
    fontSize: FONT_12,
    color: COLOR_BLACK,
  },
  optionalText: {
    color: COLOR_GREY_700,
    fontFamily: ROBOTO_REGULAR,
    fontSize: FONT_12,
  },
});
