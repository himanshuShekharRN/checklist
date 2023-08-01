import {StyleSheet} from 'react-native';
import {COLOR_BLACK} from '../../utils/colors';
import {FONT_16} from '../../utils/fontSize';
import {ROBOTO_REGULAR} from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  input: {
    fontSize: FONT_16,
    fontFamily: ROBOTO_REGULAR,
    color: COLOR_BLACK,
    paddingVertical: 18,
    flex: 1,
    marginRight: 8,
  },
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeAreaView: {
    flex: 1,
  },
});
