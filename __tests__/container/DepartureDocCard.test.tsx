import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {DepartureDocCard} from '../../src/container';

describe('DepartureDocCard', () => {
  const listData = {
    documentName: 'test',
    nationality: 'RUS',
    docNumber: 87236487,
    issueDate: '20.08.23',
    expiryDate: '31.08.23',
    documentType: 'mandatory',
    status: 'new',
    completed: false,
    isSkipped: false,
  };
  const props = {
    listData: listData,
  };

  let tree: any = render(<DepartureDocCard {...props} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(<DepartureDocCard {...props} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
