import {Dimensions} from 'react-native';

export const getDeviceWidth = (): number => {
  return Dimensions.get('screen').width;
};

export const getDeviceHeight = (): number => {
  return Dimensions.get('screen').height;
};

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);

  return `${day}.${month}.${year}`;
};

export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0;
};

export const isNonEmptyObject = obj => !isEmptyObject(obj);
