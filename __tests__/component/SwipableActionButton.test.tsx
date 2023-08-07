import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {SwipableActionButton} from '../../src/component';

describe('SwipableActionButton', () => {
  const props = {
    firstButtonDetails: {},
    secondButtonDetails: {},
    itemDetails: {
      completed: false,
      id: 123,
      isEditable: false,
      isReadOnly: true,
      text: 'hello',
    },
  };

  const tree: any = render(<SwipableActionButton {...props} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(<SwipableActionButton {...props} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
