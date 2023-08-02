import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import {
  HeadersWithButton,
  ListCard,
  RoundedButton,
  Space,
} from '../../component';
import {styles} from './ViewList.style';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getTasks, resetTask} from '../../store/reducer/checklist';

export const ViewList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const isScreenInFocus = useIsFocused();
  const {listId, listTitle} = route?.params;
  console.log('🚀 ~ file: ViewList.screen.tsx:18 ~ ViewList ~ listId:', listId);

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

  const renderListCards = ({item}) => {
    return (
      <ListCard
        iconName="description"
        editable={item.isEditable}
        readonly={item.isReadOnly}
        listTitle={item.text ? item.text : currentList}
        onChangeTextHandler={onChangeTextHandler}
      />
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
