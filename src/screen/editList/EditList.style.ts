import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_NAVY_300} from '../../utils/colors';
import {FONT_14, FONT_18} from '../../utils/fontSize';
import {ROBOTO_BOLD, ROBOTO_REGULAR} from '../../utils/fonts';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLOR_NAVY_300,
  },
  container: {
    backgroundColor: COLOR_NAVY_300,
    paddingHorizontal: 16,
  },
  iconContainerStyle: {
    backgroundColor: 'transparent',
    marginLeft: -16,
  },
  headerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  headerText: {
    color: COLOR_BLACK,
    fontSize: FONT_14,
    fontFamily: ROBOTO_REGULAR,
  },
  checklistTitle: {
    color: COLOR_BLACK,
    fontFamily: ROBOTO_BOLD,
    fontSize: FONT_18,
  },
});
