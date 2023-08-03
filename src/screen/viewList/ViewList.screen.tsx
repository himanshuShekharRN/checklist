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
import {getTasks, resetTask} from '../../store/reducer/checklist';
import {DELETE, DONE, UNCHECK} from '../../utils/iconsName';
import {COLOR_GREEN_600, COLOR_RED_500} from '../../utils/colors';

export const ViewList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const isScreenInFocus = useIsFocused();
  const {listId, listTitle} = route?.params;

  const {individualChecklistData} = useSelector(
    state => state.checkListReducer,
  );

  const [listData, setListData] = useState([]);
  const [currentList, setCurrentList] = useState('');

  const goBack = () => navigation.goBack();

  const onPressCancelHandler = () => {
    goBack();
    dispatch(resetTask());
  };

  const onChangeTextHandler = (text: string): void => {
    setCurrentList(text);
  };

  const handleOnPress = () => {
    navigation.navigate('EditList', {
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

  useEffect(() => {
    if (individualChecklistData?.length > 0) {
      setListData(individualChecklistData);
    }
  }, [individualChecklistData, setListData]);

  const handleOnUncheck = items => console.log('UNCHECK', items);
  const handleOnDelete = items => console.log('DELETE', items);
  const handleOnDone = items => console.log('DONE', items);

  const getDetailsBasedOn = _isCompleted => {
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

  const renderRightActions = item => {
    const {status, completed, documentType} = item;
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

  const renderListCards = ({item}) => {
    return (
      <SwipableCards renderRightActions={() => renderRightActions(item)}>
        <ListCard
          iconName="description"
          editable={item.isEditable}
          readonly={item.isReadOnly}
          listTitle={item.text ? item.text : currentList}
          onChangeTextHandler={onChangeTextHandler}
        />
      </SwipableCards>
    );
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
        data={listData}
        keyExtractor={item => item?.id}
        renderItem={renderListCards}
      />
    </SafeAreaView>
  );
};
