import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';

import {Home} from '../../src/screen';
import {NavigationContainer} from '@react-navigation/native';
import {mockNavigate} from '../../jest/setup';

describe('Home Screen', () => {
  const tree: any = render(
    <NavigationContainer>
      <Home />
    </NavigationContainer>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('onButton Press user navigates to Checklist screen', () => {
    render(
      <NavigationContainer>
        <Home />
      </NavigationContainer>,
    );
    const btnComponent = screen.getByTestId('homeBtn');
    fireEvent.press(btnComponent);

    expect(mockNavigate).toHaveBeenCalledWith('CheckList');
    expect(mockNavigate).not.toHaveBeenCalledWith('ViewList');
  });
});
