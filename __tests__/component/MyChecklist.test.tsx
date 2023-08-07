import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {MyCheckList} from '../../src/component';
import {Provider} from 'react-redux';
import {store} from '../../src/store';

describe('MyCheckList', () => {
  let tree: any = render(
    <Provider store={store}>
      <MyCheckList />
    </Provider>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('renders title correctly', () => {
    render(
      <Provider store={store}>
        <MyCheckList />
      </Provider>,
    );

    const titleContent = screen.getByText('My Checklists');
    expect(titleContent).toBeTruthy();
  });

  test('renders sub title correctly', () => {
    render(
      <Provider store={store}>
        <MyCheckList />
      </Provider>,
    );

    const titleContent = screen.getByText('Create your own personal checklist');
    expect(titleContent).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(
      <Provider store={store}>
        <MyCheckList />
      </Provider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
