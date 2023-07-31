import React, {useCallback} from 'react';
import {Text} from 'react-native';

import {Card, Title, Space} from '../';

export const PreDepartureList: React.FC = () => {
  const onPressHandler = useCallback(() => console.log('Hi'), []);

  return (
    <>
      <Title
        title="Pre-Departure Documents List"
        subTitle="List of all required documents for your upcoming assignment"
      />
      <Space height={12} />
      <Card onPressHandler={onPressHandler}>
        <Text>Coming soon</Text>
      </Card>
    </>
  );
};
