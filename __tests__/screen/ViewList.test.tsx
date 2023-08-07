import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {ViewList} from '../../src/screen';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '../../src/store';
import {Provider} from 'react-redux';

describe('View List Screen', () => {
  const tree: any = render(
    <NavigationContainer>
      <Provider store={store}>
        <ViewList />
      </Provider>
    </NavigationContainer>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <ViewList />
        </Provider>
      </NavigationContainer>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('Lists button is present in the ViewList screen', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <ViewList />
        </Provider>
      </NavigationContainer>,
    );
    const btnComponent = screen.getByText('Lists');

    expect(btnComponent).toBeTruthy();
  });

  test('Edit List button is present in the ViewList screen', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <ViewList />
        </Provider>
      </NavigationContainer>,
    );
    const btnComponent = screen.getByText('Edit List');

    expect(btnComponent).toBeTruthy();
  });
});
