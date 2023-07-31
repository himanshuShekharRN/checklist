import {Dimensions} from 'react-native';

export const getDeviceWidth = (): number => {
  return Dimensions.get('screen').width;
};

export const getDeviceHeight = (): number => {
  return Dimensions.get('screen').height;
};
