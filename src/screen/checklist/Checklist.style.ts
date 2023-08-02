import {StyleSheet} from 'react-native';
import {COLOR_NAVY_300} from '../../utils/colors';
import {FONT_16} from '../../utils/fontSize';
import {ROBOTO_BOLD} from '../../utils/fonts';

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
  },
});
