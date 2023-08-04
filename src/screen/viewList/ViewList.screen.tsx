import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';

import {
  HeadersWithButton,
  ListCard,
  RoundedButton,
  Space,
  SwipableActionButton,
  SwipableCards,
} from '../../component';
import {styles} from './ViewList.style';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteIndividualChecklist,
  getTasks,
  updateTaskStatus,
  resetTask,
} from '../../store/reducer/checklist';
import {DELETE, DONE, FILE_FILLED, UNCHECK} from '../../utils/iconsName';
import {COLOR_GREEN_600, COLOR_RED_500} from '../../utils/colors';
import {usePersonalChecklistData} from '../../hooks/usePersonalChecklistData';
import {UNCHECKED} from '../../utils/constant';
import {ButtonHandlerType, ViewListRouteProps} from './ViewList.type';
import {RootState} from '../../store';
import {StackNavigationProp} from '@react-navigation/stack';
import {IndividualCheckListDataType} from '../../store/reducer/checklist/type';

export const ViewList = () => {
  const navigation = useNavigation<StackNavigationProp<{EditList: {}}>>();
  const route = useRoute<ViewListRouteProps>();
  const dispatch = useDispatch();
  const isScreenInFocus = useIsFocused();

  const [personalCompletedChecklist, personalIncompleteChecklist] =
    usePersonalChecklistData();
  const {listId, listTitle} = route.params;

  const {individualChecklistData} = useSelector(
    (state: RootState) => state.checkListReducer,
  );

  const [currentList, setCurrentList] = useState('');

  const goBack = () => navigation.goBack();

  const onPressCancelHandler = (): void => {
    goBack();
    dispatch(resetTask());
  };

  const onChangeTextHandler = (text: string): void => {
    setCurrentList(text);
  };

  const handleOnPress = (): void => {
    navigation.replace('EditList', {
      listId: listId,
      listTitle: listTitle,
    });
  };

  useEffect(() => {
    if (isScreenInFocus && listId) {
      const getTaskReducerData = {
        id: listId,
      };
      dispatch(getTasks(getTaskReducerData));
    }
  }, [isScreenInFocus, listId, dispatch]);

  const handleOnUncheck = (items: IndividualCheckListDataType) =>
    dispatch(updateTaskStatus({items, listId, key: UNCHECKED}));
  const handleOnDelete = (items: IndividualCheckListDataType) =>
    dispatch(deleteIndividualChecklist({items, listId}));
  const handleOnDone = (items: IndividualCheckListDataType) =>
    dispatch(updateTaskStatus({items, listId}));

  const getDetailsBasedOn = (_isCompleted: boolean): ButtonHandlerType[] => {
    if (_isCompleted) {
      return [
        {
          fn: handleOnUncheck,
          iconName: UNCHECK,
          backgroundColor: COLOR_GREEN_600,
          iconText: 'Uncheck',
        },
      ];
    } else {
      return [
        {
          fn: handleOnDone,
          iconName: DONE,
          backgroundColor: COLOR_GREEN_600,
          iconText: 'Done',
        },
        {
          fn: handleOnDelete,
          backgroundColor: COLOR_RED_500,
          iconName: DELETE,
          iconText: 'Delete',
        },
      ];
    }
  };

  const renderRightActions = (item: IndividualCheckListDataType) => {
    const {completed} = item;
    const details = getDetailsBasedOn(completed);

    let firstButtonDetails = {...details[0]};
    let secondButtonDetails = {};
    if (details?.length > 1) {
      secondButtonDetails = {...details[1]};
    }

    return (
      <SwipableActionButton
        firstButtonDetails={firstButtonDetails}
        secondButtonDetails={secondButtonDetails}
        itemDetails={item}
      />
    );
  };

  const renderListCards = ({item}: {item: IndividualCheckListDataType}) => {
    return (
      <>
        {!item.completed && (
          <SwipableCards renderRightActions={() => renderRightActions(item)}>
            <ListCard
              iconName={FILE_FILLED}
              editable={item.isEditable}
              readonly={item.isReadOnly}
              listTitle={item.text ? item.text : currentList}
              onChangeTextHandler={onChangeTextHandler}
            />
          </SwipableCards>
        )}
      </>
    );
  };

  const renderCompletedItems = ({
    item,
  }: {
    item: IndividualCheckListDataType;
  }) => {
    return (
      <SwipableCards renderRightActions={() => renderRightActions(item)}>
        <ListCard
          iconName={FILE_FILLED}
          editable={item.isEditable}
          readonly={item.isReadOnly}
          textStyle={styles.textStyle}
          listTitle={item.text ? item.text : currentList}
          onChangeTextHandler={onChangeTextHandler}
        />
      </SwipableCards>
    );
  };

  const renderHeaderComponent = () => {
    if (
      personalIncompleteChecklist?.length !== 0 &&
      personalCompletedChecklist?.length > 0
    ) {
      return (
        <View style={styles.toDoSeparatorContainer}>
          <Text style={styles.separatorText}>To-do</Text>
        </View>
      );
    }
  };
  const renderCompletedComponent = () => {
    if (personalCompletedChecklist?.length > 0) {
      return (
        <View>
          <View style={styles.completeSeparatorContainer}>
            <Text style={styles.separatorText}>Completed tasks</Text>
          </View>
          <FlatList
            data={personalCompletedChecklist}
            renderItem={renderCompletedItems}
          />
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <HeadersWithButton
          onPressBackIconHandler={onPressCancelHandler}
          iconContainerStyle={styles.iconContainerStyle}>
          <View style={styles.headerTextContainer}>
            <Pressable onPress={onPressCancelHandler}>
              <Text style={styles.headerText}>Lists</Text>
            </Pressable>
            <RoundedButton
              buttonStyle={styles.buttonStyle}
              buttonTitleStyle={styles.buttonTitleStyle}
              title={'Edit List'}
              onPress={handleOnPress}
            />
          </View>
        </HeadersWithButton>
        <Space height={18} />
        <Text style={styles.checklistTitle}>{listTitle}</Text>
        <Space height={24} />
      </View>
      <FlatList
        scrollEnabled
        bounces={false}
        data={individualChecklistData}
        ListHeaderComponent={renderHeaderComponent}
        renderItem={renderListCards}
        ListFooterComponent={renderCompletedComponent}
      />
    </SafeAreaView>
  );
};
