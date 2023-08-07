import React, {useEffect, useState} from 'react';
import {Pressable, SafeAreaView, TextInput, View, Keyboard} from 'react-native';
import {
  Card,
  CustomIcon,
  HeadersWithButton,
  RoundedButton,
  Space,
} from '../../component';
import {styles} from './AddList.style';
import {COLOR_GREY_600, COLOR_GREY_700} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch} from 'react-redux';
import {addCheckListToServer} from '../../store/reducer/checklist';
import {CheckListData} from './AddList.type';

export const AddList = () => {
  const [listTitle, setListTitle] = useState('');
  const [showCrossIcon, setShowCrossIcon] = useState(false);

  const navigation = useNavigation<
    StackNavigationProp<{
      EditList: {
        listId: number;
        listTitle: string;
      };
    }>
  >();
  const dispatch = useDispatch();

  useEffect(() => {
    if (listTitle?.length === 0) {
      setShowCrossIcon(false);
    } else {
      setShowCrossIcon(true);
    }
  }, [listTitle.length, setShowCrossIcon]);

  const clearTitle = (): void => {
    setListTitle('');
  };

  const goToPreviousScreen = (): void => {
    navigation.goBack();
  };

  const onChangeTextHandler = (text: string): void => {
    setListTitle(text);
  };

  const onPressDoneHandler = () => {
    Keyboard.dismiss();
    const checkListData: CheckListData = {
      id: Date.now(),
      dateCreated: Date.now(),
      checkListTitle: listTitle,
      checkListsData: [],
      lastItemAddedInList: null,
    };
    dispatch(addCheckListToServer(checkListData));
    navigation.replace('EditList', {
      listId: checkListData.id,
      listTitle: listTitle,
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Pressable onPress={Keyboard.dismiss} style={styles.container}>
        <HeadersWithButton onPressBackIconHandler={goToPreviousScreen}>
          {showCrossIcon && (
            <RoundedButton title="Done" onPress={onPressDoneHandler} />
          )}
        </HeadersWithButton>

        <Space height={55} />

        <Card cardStyle={styles.cardStyle} isPressable={false}>
          <View style={styles.cardStyle}>
            <TextInput
              autoFocus
              maxLength={60}
              value={listTitle}
              style={styles.input}
              placeholder="Insert list’s title"
              placeholderTextColor={COLOR_GREY_600}
              onChangeText={onChangeTextHandler}
              cursorColor={COLOR_GREY_700}
            />
          </View>
          {showCrossIcon && (
            <CustomIcon
              name="close"
              size={14}
              isPressable
              onPressHandler={clearTitle}
            />
          )}
        </Card>
      </Pressable>
    </SafeAreaView>
  );
};
