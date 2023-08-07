import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import {
  HeadersWithButton,
  ListCard,
  RoundedButton,
  Space,
} from '../../component';
import {styles} from './EditList.style';
import {CheckListItem, EditListRouteProp, RouteParams} from './EditList.type';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {addTasks} from '../../store/reducer/checklist';
import {RootState} from '../../store';

export const EditList = () => {
  const navigation = useNavigation<StackNavigationProp<{ViewList: {}}>>();

  const dispatch = useDispatch();
  const {individualChecklistData} = useSelector(
    (state: RootState) => state.checkListReducer,
  );

  const route = useRoute<EditListRouteProp>();
  const {listId, listTitle}: RouteParams = route.params;
  const [listData, setListData] = useState<CheckListItem[]>([]);
  const [currentList, setCurrentList] = useState('');
  const [isAddingList, setIsAddingList] = useState(false);

  const goBack = () => navigation.goBack();

  const onPressCancelHandler = () => {
    goBack();
  };

  const onChangeTextHandler = (text: string): void => {
    setCurrentList(text);
  };

  useEffect(() => {
    if (individualChecklistData?.length > 0) {
      setListData([...individualChecklistData]);
    }
  }, [individualChecklistData, setListData]);

  const handleOnPress = () => {
    if (isAddingList) {
      if (currentList?.trim() !== '') {
        const newListData: CheckListItem = {
          id: Date.now(),
          isEditable: false,
          isReadOnly: true,
          text: currentList,
          completed: false,
        };
        setListData([...listData, newListData]);
      }

      setCurrentList('');
    } else {
      if (listData?.length !== 0) {
        const addTaskReducerData = {
          id: listId,
          listOfTaskAdded: [...listData],
        };
        dispatch(addTasks(addTaskReducerData));
        navigation.replace('ViewList', {
          listId: listId,
          listTitle: listTitle,
        });
      } else {
        goBack();
      }
    }
  };

  useEffect(() => {
    if (currentList?.trim()?.length > 0) {
      setIsAddingList(true);
    } else {
      setIsAddingList(false);
    }
  }, [currentList, setIsAddingList]);

  const renderListCards = ({item}: {item: CheckListItem}) => {
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
            <Pressable testID="cancelBtn" onPress={onPressCancelHandler}>
              <Text style={styles.headerText}>Cancel</Text>
            </Pressable>
            <RoundedButton
              title={isAddingList ? 'Done ' : 'Save'}
              onPress={handleOnPress}
            />
          </View>
        </HeadersWithButton>
        <Space height={18} />
        <Text style={styles.checklistTitle}>{listTitle}</Text>
        <Space height={24} />
      </View>
      <View>
        <FlatList
          scrollEnabled
          bounces={false}
          data={listData}
          renderItem={renderListCards}
        />
        <ListCard
          iconName="description"
          editable={true}
          readonly={false}
          listTitle={currentList}
          onChangeTextHandler={onChangeTextHandler}
        />
      </View>
    </SafeAreaView>
  );
};
