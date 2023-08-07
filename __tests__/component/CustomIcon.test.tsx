import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {CustomIcon} from '../../src/component';
import {RIGHT_ANGLE_BRACKET} from '../../src/utils/iconsName';
import {COLOR_BLACK} from '../../src/utils/colors';

describe('CustomIcon', () => {
  const onPressHandlerMock = jest.fn();
  const iconWrapperStyle = {
    flex: 1,
  };
  const props = {
    size: 16,
    name: RIGHT_ANGLE_BRACKET,
    color: COLOR_BLACK,
    onPressHandler: onPressHandlerMock,
    isPressable: true,
    iconWrapperStyle: iconWrapperStyle,
  };

  const tree = render(<CustomIcon {...props} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('calls onPressHandler when the customIcon is pressable and pressed', () => {
    render(<CustomIcon {...props} />);

    const customIcon = screen.getByTestId('customIcon');
    fireEvent.press(customIcon);

    expect(onPressHandlerMock).toHaveBeenCalled();
  });

  test('applies custom iconWrapperStyle', () => {
    render(<CustomIcon {...props} />);

    const customIcon = screen.getByTestId('customIcon');
    expect(customIcon.props.style).toBe(iconWrapperStyle);
  });

  test('snapshot created successfully', () => {
    render(<CustomIcon {...props} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
