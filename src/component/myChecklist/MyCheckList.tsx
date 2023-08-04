import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

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
import {DELETE, RIGHT_ANGLE_BRACKET} from '../../utils/iconsName';
import {deleteChecklist} from '../../store/reducer/checklist';
import {CheckListData} from '../../screen/addList/AddList.type';
import {FirstButtonDetails} from '../swipableActionButton/SwipableAction.type';
import {RootState} from '../../store';

export const MyCheckList: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {checklistData} = useSelector(
    (state: RootState) => state.checkListReducer,
  );

  const onPressHandler = useCallback(
    (item: CheckListData) =>
      navigation.navigate('ViewList', {
        listId: item?.id,
        listTitle: item?.checkListTitle,
      }),
    [navigation],
  );
  const handleDelete = (items: CheckListData): void => {
    dispatch(deleteChecklist(items));
  };

  const renderRightActions = (item: CheckListData) => {
    const firstButtonDetails: FirstButtonDetails = {
      fn: handleDelete,
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
            name={RIGHT_ANGLE_BRACKET}
            size={14}
            isPressable={false}
            color={COLOR_GREY_600}
          />
        </Card>
      </SwipableCards>
    );
  };

  const renderEmptyContent = () => (
    <View style={styles.emptyContentContainer}>
      <Text style={styles.emptyText}>No Personal Checklist Found!</Text>
    </View>
  );

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
        ListEmptyComponent={renderEmptyContent}
        keyExtractor={item => item?.id}
        ItemSeparatorComponent={renderItemSeparator}
        renderItem={renderCardItems}
      />
    </>
  );
};
