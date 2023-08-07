import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Space} from '../../src/component';

describe('Space', () => {
  const props = {
    height: 30,
    width: 30,
    backgroundColor: 'transparent',
  };

  const tree = render(<Space {...props} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(<Space {...props} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
