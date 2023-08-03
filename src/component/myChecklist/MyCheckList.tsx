import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
  Title,
  Card,
  Space,
  CustomIcon,
  SwipableActionButton,
  SwipableCards,
} from '../';
import {styles} from './MyCheckList.style';
import {COLOR_GREY_600, COLOR_RED_500} from '../../utils/colors';
import {formatDate} from '../../utils/helper';
import {DELETE} from '../../utils/iconsName';

export const MyCheckList: React.FC = () => {
  const navigation = useNavigation();
  const {checklistData} = useSelector(state => state.checkListReducer);

  const onPressHandler = useCallback(
    item =>
      navigation.navigate('ViewList', {
        listId: item?.id,
        listTitle: item?.checkListTitle,
      }),
    [navigation],
  );
  const fn1 = items => {
    console.log('=====>itesm==>fn1', items);
  };

  const renderRightActions = item => {
    const firstButtonDetails = {
      fn: fn1,
      backgroundColor: COLOR_RED_500,
      iconName: DELETE,
      iconText: 'Delete',
    };
    return (
      <SwipableActionButton
        firstButtonDetails={firstButtonDetails}
        itemDetails={item}
      />
    );
  };

  const renderCardItems = ({item}) => {
    return (
      <SwipableCards renderRightActions={() => renderRightActions(item)}>
        <Card
          cardStyle={styles.cardStyle}
          isPressable
          onPressHandler={() => onPressHandler(item)}>
          <View>
            <Text style={styles.checkListTitle}>{item.checkListTitle}</Text>
            <View style={styles.listInfoTextContainer}>
              <Text style={styles.listInfoText}>
                Date created: {formatDate(item.dateCreated)}
              </Text>
              <Text style={styles.listInfoText}>
                Last item added: {item.lastItemAddedInList?.text ?? 'none'}
              </Text>
            </View>
          </View>
          <CustomIcon
            name="keyboard-arrow-right"
            size={14}
            isPressable={false}
            color={COLOR_GREY_600}
          />
        </Card>
      </SwipableCards>
    );
  };

  const renderItemSeparator = () => <View style={styles.separator} />;

  return (
    <>
      <Title
        title="My Checklists"
        subTitle="Create your own personal checklist"
      />
      <Space height={12} />
      <FlatList
        scrollEnabled
        bounces={false}
        data={checklistData}
        keyExtractor={item => item?.id}
        ItemSeparatorComponent={renderItemSeparator}
        renderItem={renderCardItems}
      />
    </>
  );
};
