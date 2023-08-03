import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_NAVY_300, COLOR_WHITE} from '../../utils/colors';
import {FONT_12, FONT_16} from '../../utils/fontSize';
import {ROBOTO_BOLD, ROBOTO_REGULAR} from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: COLOR_NAVY_300,
  },
  subContainer: {
    paddingHorizontal: 16,
  },
  contentContainerStyle: {
    paddingBottom: 50,
    backgroundColor: COLOR_NAVY_300,
  },
  iconContainerStyle: {
    backgroundColor: 'transparent',
    marginLeft: -13,
  },
  heading: {
    textAlign: 'center',
    flex: 1,
    fontSize: FONT_16,
    fontFamily: ROBOTO_BOLD,
  },
  containerStyle: {
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    backgroundColor: COLOR_WHITE,
  },
  progressBarContainer: {
    backgroundColor: COLOR_WHITE,
    paddingHorizontal: 16,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  progressText: {
    textAlign: 'right',
    marginBottom: 4,
    color: COLOR_BLACK,
    fontSize: FONT_12,
    fontFamily: ROBOTO_REGULAR,
  },
});
