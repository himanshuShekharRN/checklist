import {StyleSheet} from 'react-native';
import {COLOR_MARLOW_BLUE, COLOR_WHITE} from '../../utils/colors';
import {ROBOTO_BOLD} from '../../utils/fonts';
import {FONT_14} from '../../utils/fontSize';

export const styles = StyleSheet.create({
  indicatorStyle: {
    borderWidth: 1,
    borderColor: COLOR_MARLOW_BLUE,
  },
  tabBar: {
    height: 40,
    elevation: 0,
    borderBottomWidth: 0,
    backgroundColor: COLOR_WHITE,
    borderColor: COLOR_WHITE,
    marginLeft: 16,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  tabStyle: {
    width: 'auto',
    paddingLeft: 0,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    fontFamily: ROBOTO_BOLD,
    fontSize: FONT_14,
    textTransform: 'none',
  },
  iconWrapperStyle: {
    marginBottom: 5,
  },
});
