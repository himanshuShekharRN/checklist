import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {getRoutes} from '../../src/utils/helper';

import {Provider} from 'react-redux';
import {store} from '../../src/store';
import {CustomTab, NationalChecklist} from '../../src/container';
import {
  FifthRoute,
  FirstRoute,
  FourthRoute,
  SecondRoute,
  ThirdRoute,
} from '../../src/container/customTab';

describe('CustomTab', () => {
  const getFirstRoute = () => {
    return (
      <FirstRoute
        testID="firstRoute"
        children1={<NationalChecklist testID="NationalChecklist" />}
      />
    );
  };

  const getSecondRoute = () => {
    return <SecondRoute testID="secondRoute" />;
  };

  const getThirdRoute = () => {
    return <ThirdRoute testID="thirdRoute" />;
  };

  const getFourthRoute = () => {
    return <FourthRoute testID="fourthRoute" />;
  };

  const getFifthRoute = () => {
    return <FifthRoute testID="fifthRoute" />;
  };
  const props = {
    routes: getRoutes(),
    firstRoute: getFirstRoute(),
    secondRoute: getSecondRoute(),
    thirdRoute: getThirdRoute(),
    fourthRoute: getFourthRoute(),
    fifthRoute: getFifthRoute(),
  };

  const tree = render(
    <Provider store={store}>
      <CustomTab {...props} />
    </Provider>,
  );

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('snapshot created successfully', () => {
    render(
      <Provider store={store}>
        <CustomTab {...props} />
      </Provider>,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
