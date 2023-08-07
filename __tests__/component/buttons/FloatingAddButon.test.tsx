import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';

import {FloatingAddButton} from '../../../src/component';

describe('Floating Add Button', () => {
  const onPressAddHandlerMock = jest.fn();
  const customContainerStyle = {
    backgroundColor: 'transparent',
    borderRadius: 20,
  };

  const floatingButtonProps = {
    testID: 'floatingBtn',
    onPressAddHandler: onPressAddHandlerMock,
    containerStyle: customContainerStyle,
  };

  let tree: any = render(<FloatingAddButton {...floatingButtonProps} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('render with a Plus icon', () => {
    render(<FloatingAddButton {...floatingButtonProps} />);

    const button = screen.getByTestId('plusIcon');
    expect(button).toBeTruthy();
  });

  test('calls onPress when the button is pressed', () => {
    render(<FloatingAddButton {...floatingButtonProps} />);

    const button = screen.getByTestId('floatingBtn');
    fireEvent.press(button);

    expect(onPressAddHandlerMock).toHaveBeenCalled();
  });

  test('applies custom containerStyle', () => {
    render(<FloatingAddButton {...floatingButtonProps} />);

    const button = screen.getByTestId('floatingBtn');
    expect(button.props.style).toContainEqual(customContainerStyle);
  });

  test('snapshot created successfully', () => {
    render(<FloatingAddButton {...floatingButtonProps} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
