import {PropsWithChildren, ReactNode} from 'react';

export interface SwipableCardsProps
  extends PropsWithChildren<{
    renderRightActions: () => ReactNode;
  }> {}
