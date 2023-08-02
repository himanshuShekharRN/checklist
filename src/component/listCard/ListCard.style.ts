import {COLOR_GRAY_500} from './../../utils/colors';
import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_MARLOW_BLUE} from '../../utils/colors';
import {FONT_16} from '../../utils/fontSize';
import {ROBOTO_REGULAR} from '../../utils/fonts';

export const styles = StyleSheet.create({
  iconWrapperStyle: {
    backgroundColor: COLOR_MARLOW_BLUE,
    marginRight: 16,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: FONT_16,
    fontFamily: ROBOTO_REGULAR,
    color: COLOR_BLACK,
    flex: 1,
  },
  text: {
    fontSize: FONT_16,
    fontFamily: ROBOTO_REGULAR,
    color: COLOR_BLACK,
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: COLOR_GRAY_500,
    borderBottomColor: COLOR_GRAY_500,
    paddingVertical: 22,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
