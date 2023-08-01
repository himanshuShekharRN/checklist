import {PropsWithChildren} from 'react';

export interface HeadersWithButtonProps extends PropsWithChildren {
  onPressBackIconHandler: () => void;
}
