import React, {useCallback} from 'react';
import {FlatList, Text, View} from 'react-native';

import {Title} from '../title';
import {Card} from '../cards';
import {Space} from '../space';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {styles} from './MyCheckList.style';
import {CustomIcon} from '../customIcon';
import {COLOR_GREY_600} from '../../utils/colors';
import {formatDate} from '../../utils/helper';

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
  const renderCardItems = ({item}) => {
    return (
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
    );
  };

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
        renderItem={renderCardItems}
      />
    </>
  );
};
