import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {ListCard} from '../../src/component';
import {RIGHT_ANGLE_BRACKET} from '../../src/utils/iconsName';
import {COLOR_BLACK} from '../../src/utils/colors';

describe('ListCard', () => {
  const mockFunction = jest.fn();
  const textStyle = {
    color: COLOR_BLACK,
  };
  const props = {
    iconName: RIGHT_ANGLE_BRACKET,
    editable: false,
    readonly: true,
    textStyle: textStyle,
    listTitle: 'Test List Title',
    onChangeTextHandler: mockFunction,
  };

  const tree: any = render(<ListCard {...props} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('renders title correctly', () => {
    render(<ListCard {...props} />);

    const titleContent = screen.getByText(props.listTitle);
    expect(titleContent).toBeTruthy();
  });

  test('renders TextInput correctly', () => {
    const _props = {
      iconName: RIGHT_ANGLE_BRACKET,
      editable: true,
      readonly: false,
      textStyle: textStyle,
      listTitle: 'Test List Title',
      onChangeTextHandler: mockFunction,
    };
    render(<ListCard {..._props} />);

    const textInput = screen.getByTestId('listCardTextInput');
    expect(textInput).toBeTruthy();
  });

  test('applies custom textStyle', () => {
    render(<ListCard {...props} />);

    const text = screen.getByTestId('listCardText');
    expect(text.props.style).toContainEqual(textStyle);
  });

  test('snapshot created successfully', () => {
    render(<ListCard {...props} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
