import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {NationalChecklist} from '../../src/component';
import {Provider} from 'react-redux';
import {store} from '../../src/store';

describe('NationalChecklist', () => {
  const props = {
    testID: 'nationalChecklist',
  };

  let tree: any = render(
    <Provider store={store}>
      <NationalChecklist {...props} />
    </Provider>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(
      <Provider store={store}>
        <NationalChecklist {...props} />
      </Provider>,
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
