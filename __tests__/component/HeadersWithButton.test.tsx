import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {HeadersWithButton} from '../../src/component';
import {Text} from 'react-native';

describe('HeadersWithButton', () => {
  const onPressBackIconHandlerMock = jest.fn();
  const containerStyle = {
    flex: 1,
  };
  const props = {
    onPressBackIconHandler: onPressBackIconHandlerMock,
    containerStyle: containerStyle,
    iconContainerStyle: containerStyle,
    testID: 'test',
  };

  let tree: any = render(
    <HeadersWithButton {...props}>
      <Text>Button Content</Text>
    </HeadersWithButton>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('renders children correctly', () => {
    render(
      <HeadersWithButton {...props}>
        <Text>Button Content</Text>
      </HeadersWithButton>,
    );

    const buttonContent = screen.getByText('Button Content');
    expect(buttonContent).toBeTruthy();
  });

  test('calls onPressBackIconHandler when the header is pressed', () => {
    render(
      <HeadersWithButton {...props}>
        <Text>Button Content</Text>
      </HeadersWithButton>,
    );

    const iconElement = screen.getByTestId('test');
    fireEvent.press(iconElement);

    expect(onPressBackIconHandlerMock).toHaveBeenCalled();
  });

  test('applies custom iconContainerStyle', () => {
    render(
      <HeadersWithButton {...props}>
        <Text>Card Content</Text>
      </HeadersWithButton>,
    );

    const card = screen.getByTestId('test');
    expect(card.props.style).toContainEqual(containerStyle);
  });

  test('applies custom containerStyle', () => {
    render(
      <HeadersWithButton {...props}>
        <Text>Card Content</Text>
      </HeadersWithButton>,
    );

    const card = screen.getByTestId('headersWithButton');
    expect(card.props.style).toContainEqual(containerStyle);
  });

  test('snapshot created successfully', () => {
    render(
      <HeadersWithButton {...props}>
        <Text>Card Content</Text>
      </HeadersWithButton>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
