import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';

import {RoundedButton} from '../../../src/component';
import {COLOR_BLACK} from '../../../src/utils/colors';

describe('Rounded Button', () => {
  const onPressMock = jest.fn();
  const customBtnStyle = {backgroundColor: 'transparent', borderRadius: 20};
  const customBtnTitleStyle = {color: COLOR_BLACK};

  const roundedButtonProps = {
    title: 'Press Me',
    onPress: onPressMock,
    buttonStyle: customBtnStyle,
    buttonTitleStyle: customBtnTitleStyle,
  };

  const tree = render(<RoundedButton {...roundedButtonProps} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('renders button with the correct title', () => {
    render(<RoundedButton {...roundedButtonProps} />);

    const button = screen.getByText('Press Me');
    expect(button).toBeTruthy();
  });

  test('calls onPress when the button is pressed', () => {
    render(<RoundedButton {...roundedButtonProps} />);

    const button = screen.getByText('Press Me');
    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });

  test('applies custom buttonTitleStyle', () => {
    render(<RoundedButton {...roundedButtonProps} />);

    const buttonText = screen.getByText('Press Me');
    expect(buttonText.props.style).toContainEqual(customBtnTitleStyle);
  });

  test('snapshot created successfully', () => {
    render(<RoundedButton {...roundedButtonProps} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
