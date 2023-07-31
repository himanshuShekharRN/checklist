import {PropsWithChildren} from 'react';

export interface CardProps
  extends PropsWithChildren<{
    onPressHandler: () => void;
  }> {}
