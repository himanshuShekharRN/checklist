import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {Provider} from 'react-redux';
import {store} from '../../src/store';
import {PreDepartureList} from '../../src/container';

describe('PreDepartureList', () => {
  const tree: any = render(
    <Provider store={store}>
      <PreDepartureList />
    </Provider>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('renders title correctly', () => {
    render(
      <Provider store={store}>
        <PreDepartureList />
      </Provider>,
    );

    const titleContent = screen.getByText('Pre-Departure Documents List');
    expect(titleContent).toBeTruthy();
  });

  test('renders sub title correctly', () => {
    render(
      <Provider store={store}>
        <PreDepartureList />
      </Provider>,
    );

    const titleContent = screen.getByText(
      'List of all required documents for your upcoming assignment',
    );
    expect(titleContent).toBeTruthy();
  });
});
