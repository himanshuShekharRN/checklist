import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {LinearProgressBar} from '../../src/component';

describe('LinearProgressBar', () => {
  const props = {
    progressStatus: 80,
  };

  let tree: any = render(<LinearProgressBar {...props} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(<LinearProgressBar {...props} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
