import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {Checklist} from '../../src/screen';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '../../src/store';
import {mockNavigate} from '../../jest/setup';

describe('Checklist Screen', () => {
  const tree = render(
    <NavigationContainer>
      <Provider store={store}>
        <Checklist />
      </Provider>
    </NavigationContainer>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('onButton Press user navigates to AddList screen', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <Checklist />
        </Provider>
      </NavigationContainer>,
    );
    const btnComponent = screen.getByTestId('floatingBtn');
    fireEvent.press(btnComponent);

    expect(mockNavigate).toHaveBeenCalledWith('AddList');
    expect(mockNavigate).not.toHaveBeenCalledWith('ViewList');
  });
});
