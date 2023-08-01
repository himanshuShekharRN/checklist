import React, {useCallback} from 'react';
import {Text} from 'react-native';

import {Title} from '../title';
import {Card} from '../cards';
import {Space} from '../space';
import {useNavigation} from '@react-navigation/native';

export const MyCheckList: React.FC = () => {
  const navigation = useNavigation();

  const onPressHandler = useCallback(
    () =>
      navigation.navigate('ViewList', {
        listId: '2', //for demo purpose
      }),
    [navigation],
  );

  return (
    <>
      <Title
        title="My Checklists"
        subTitle="Create your own personal checklist"
      />
      <Space height={12} />
      <Card isPressable onPressHandler={onPressHandler}>
        <Text>Coming soon</Text>
      </Card>
    </>
  );
};
