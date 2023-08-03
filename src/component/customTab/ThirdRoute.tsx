import React, {memo} from 'react';
import {View} from 'react-native';
import {CustomIcon} from '../customIcon';
import {COLOR_BLACK} from '../../utils/colors';
import {WORKSPACE_PREMIUM} from '../../utils/iconsName';

export const ThirdRoute = memo(props => {
  const {children3} = props || {};
  return (
    <View>
      {children3 || (
        <CustomIcon
          name={WORKSPACE_PREMIUM}
          size={40}
          color={COLOR_BLACK}
          isPressable={false}
        />
      )}
    </View>
  );
});
