import {StyleSheet} from 'react-native';
import {
  COLOR_BLACK,
  COLOR_GREY_600,
  COLOR_NAVY_300,
  COLOR_TEAL,
} from '../../utils/colors';
import {FONT_14, FONT_18} from '../../utils/fontSize';
import {ROBOTO_BOLD, ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../utils/fonts';

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
  buttonStyle: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLOR_TEAL,
  },
  buttonTitleStyle: {
    color: COLOR_TEAL,
  },
  completeSeparatorContainer: {
    paddingTop: 24,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  separatorText: {
    fontFamily: ROBOTO_MEDIUM,
    fontSize: FONT_14,
    color: COLOR_BLACK,
  },
  toDoSeparatorContainer: {
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  textStyle: {
    color: COLOR_GREY_600,
  },
});
