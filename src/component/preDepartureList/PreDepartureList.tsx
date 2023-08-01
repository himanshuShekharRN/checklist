import React, {useCallback} from 'react';
import {Card} from '../cards';
import {Title} from '../title';
import {Text} from 'react-native';
import {Space} from '../space';

export const PreDepartureList: React.FC = () => {
  const onPressHandler = useCallback(() => console.log('Hi'), []);

  return (
    <>
      <Title
        title="Pre-Departure Documents List"
        subTitle="List of all required documents for your upcoming assignment"
      />
      <Space height={12} />
      <Card isPressable onPressHandler={onPressHandler}>
        <Text>Coming soon</Text>
      </Card>
    </>
  );
};
