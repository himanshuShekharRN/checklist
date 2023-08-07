import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {SwipableCards} from '../../src/component';
import {Text} from 'react-native';

describe('SwipableCards', () => {
  const props = {
    renderRightActions: jest.fn(),
  };

  const tree: any = render(
    <SwipableCards {...props}>
      <Text>Swipable Card Content</Text>
    </SwipableCards>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('renders children correctly', () => {
    render(
      <SwipableCards {...props}>
        <Text>Swipable Card Content</Text>
      </SwipableCards>,
    );

    const cardContent = screen.getByText('Swipable Card Content');
    expect(cardContent).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(
      <SwipableCards {...props}>
        <Text>Swipable Card Content</Text>
      </SwipableCards>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
