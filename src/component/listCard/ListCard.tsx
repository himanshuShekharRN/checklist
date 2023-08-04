import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {ListCardProps} from './ListCard.type';
import {CustomIcon} from '../customIcon';
import {COLOR_WHITE} from '../../utils/colors';
import {styles} from './ListCard.style';

export const ListCard: React.FC<ListCardProps> = props => {
  const {
    iconName,
    editable,
    readonly,
    textStyle,
    listTitle,
    onChangeTextHandler,
  } = props;

  return (
    <View style={styles.container}>
      <CustomIcon
        name={iconName}
        isPressable={false}
        size={12}
        color={COLOR_WHITE}
        iconWrapperStyle={styles.iconWrapperStyle}
      />
      {editable && (
        <TextInput
          autoFocus
          style={styles.textInput}
          maxLength={80}
          value={listTitle}
          onChangeText={onChangeTextHandler}
        />
      )}
      {readonly && <Text style={[styles.text, textStyle]}>{listTitle}</Text>}
    </View>
  );
};
