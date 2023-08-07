import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Title} from '../../src/component';

describe('SwipableCards', () => {
  const props = {
    title: 'Test Title',
    subTitle: 'Test Subtitle',
  };

  const tree = render(<Title {...props} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('renders title correctly', () => {
    render(<Title {...props} />);

    const title = screen.getByText(props.title);
    expect(title).toBeTruthy();
  });

  test('renders sub title correctly', () => {
    render(<Title {...props} />);

    const subTitle = screen.getByText(props.subTitle);
    expect(subTitle).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(<Title {...props} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
