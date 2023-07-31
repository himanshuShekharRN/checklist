import React, {useCallback} from 'react';
import {Text} from 'react-native';
import {Title} from '../title';
import {Card} from '../cards';

export const MyCheckList: React.FC = () => {
  const onPressHandler = useCallback(() => console.log('Hi'), []);

  return (
    <>
      <Title
        title="My Checklists"
        subTitle="Create your own personal checklist"
      />
      <Card onPressHandler={onPressHandler}>
        <Text>Coming soon</Text>
      </Card>
    </>
  );
};
