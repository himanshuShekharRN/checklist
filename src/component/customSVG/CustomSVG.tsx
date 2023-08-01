import React from 'react';
import {Pressable, View} from 'react-native';
import {CustomSVGProps} from './CustomSVG.type';

export const CustomSVG: React.FC<CustomSVGProps> = props => {
  const {svgSource, isPressable, customStyle} = props;
  const ViewWrapper = isPressable ? Pressable : View;

  return <ViewWrapper style={customStyle}>{svgSource}</ViewWrapper>;
};
