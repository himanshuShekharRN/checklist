import React from 'react';
import {Text} from 'react-native';

import {styles} from './Title.style';
import {TitleProps} from './Title.type';

export const Title: React.FC<TitleProps> = props => {
  const {title, subTitle} = props;

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </>
  );
};
