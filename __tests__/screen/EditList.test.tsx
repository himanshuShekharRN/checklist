import React from 'react';
import {render, screen} from '@testing-library/react-native';

import {EditList} from '../../src/screen';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '../../src/store';
import {Provider} from 'react-redux';

describe('Edit List Screen', () => {
  const tree = render(
    <NavigationContainer>
      <Provider store={store}>
        <EditList />
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
          <EditList />
        </Provider>
      </NavigationContainer>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('Cancel button is present in the ViewList screen', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <EditList />
        </Provider>
      </NavigationContainer>,
    );
    const btnComponent = screen.getByTestId('cancelBtn');

    expect(btnComponent).toBeTruthy();
  });
});
