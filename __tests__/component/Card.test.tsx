import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {Card} from '../../src/component';
import {Text} from 'react-native';

describe('Card', () => {
  const onPressHandlerMock = jest.fn();
  const customCardStyle = {
    flex: 1,
  };
  const props = {
    onPressHandler: onPressHandlerMock,
    isPressable: true,
    cardStyle: customCardStyle,
  };

  const tree: any = render(
    <Card {...props}>
      <Text>Card Content</Text>
    </Card>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('renders children correctly', () => {
    render(
      <Card {...props}>
        <Text>Card Content</Text>
      </Card>,
    );

    const cardContent = screen.getByText('Card Content');
    expect(cardContent).toBeTruthy();
  });

  test('calls onPressHandler when the card is pressable and pressed', () => {
    render(
      <Card {...props}>
        <Text>Card Content</Text>
      </Card>,
    );

    const card = screen.getByTestId('card');
    fireEvent.press(card);

    expect(onPressHandlerMock).toHaveBeenCalled();
  });

  test('applies custom cardStyle', () => {
    render(
      <Card {...props}>
        <Text>Card Content</Text>
      </Card>,
    );

    const card = screen.getByTestId('card');
    expect(card.props.style).toContainEqual(customCardStyle);
  });

  test('snapshot created successfully', () => {
    render(
      <Card {...props}>
        <Text>Card Content</Text>
      </Card>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
