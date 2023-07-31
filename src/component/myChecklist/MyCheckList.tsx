import React, {useCallback} from 'react';
import {Text} from 'react-native';

import {Title, Card, Space} from '../';

export const MyCheckList: React.FC = () => {
  const onPressHandler = useCallback(() => console.log('My Checklist'), []);

  return (
    <>
      <Title
        title="My Checklists"
        subTitle="Create your own personal checklist"
      />
      <Space height={12} />
      <Card onPressHandler={onPressHandler}>
        <Text>Coming soon</Text>
      </Card>
    </>
  );
};
