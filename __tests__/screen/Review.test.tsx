import React from 'react';
import {ReviewList} from '../../src/screen';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '../../src/store';
import {render, screen} from '@testing-library/react-native';

describe('Review Screen', () => {
  let tree: any = render(
    <NavigationContainer>
      <Provider store={store}>
        <ReviewList />
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
          <ReviewList />
        </Provider>
      </NavigationContainer>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('header text should be', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <ReviewList />
        </Provider>
      </NavigationContainer>,
    );
    const headerElement = screen.getByText('Pre-Departure Document List');
    const nonExistingHeaderElement = screen.queryByText('My Checklists');
    expect(headerElement).toBeTruthy();
    expect(nonExistingHeaderElement).toBeNull();
  });

  test('NationalChecklist component should be present', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <ReviewList />
        </Provider>
      </NavigationContainer>,
    );
    const NationalChecklist = screen.getByTestId('NationalChecklist');
    expect(NationalChecklist).toBeTruthy();
  });
  test('renders CustomTab with correct routes and content', () => {
    render(
      <NavigationContainer>
        <Provider store={store}>
          <ReviewList />
        </Provider>
      </NavigationContainer>,
    );

    // Test CustomTab routes
    const firstTab = screen.getAllByText('STCW National');
    const secondTab = screen.getAllByText('Flag State');
    const thirdTab = screen.getAllByText('GDPR Documents');
    const fourthTab = screen.getAllByText('Training');
    const fifthTab = screen.getAllByText('Technical');
    expect(firstTab).toBeTruthy();
    expect(secondTab).toBeTruthy();
    expect(thirdTab).toBeTruthy();
    expect(fourthTab).toBeTruthy();
    expect(fifthTab).toBeTruthy();
  });
});
