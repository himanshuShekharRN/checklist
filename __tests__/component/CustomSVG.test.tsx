import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {CustomSVG} from '../../src/component';
import {AddIcon} from '../../src/assets/icons';

describe('CustomSVG', () => {
  const svgSource = <AddIcon />;
  const customStyle = {
    width: 20,
    height: 20,
  };
  const props = {
    svgSource: svgSource,
    isPressable: true,
    customStyle: customStyle,
  };

  const tree = render(<CustomSVG {...props} />);

  test('renders correctly', () => {
    expect(tree.toJSON()).toBeTruthy();
  });

  test('applies custom style', () => {
    render(<CustomSVG {...props} />);

    const customSVG = screen.getByTestId('customSVG');
    expect(customSVG.props.style).toBe(customStyle);
  });

  test('snapshot created successfully', () => {
    render(<CustomSVG {...props} />);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
