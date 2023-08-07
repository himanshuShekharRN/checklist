import {ReactNode} from 'react';

export type Routes = {
  key: string;
  title: string;
  requireAttention: boolean;
};
export interface CustomTabProps {
  routes: Routes[];
  firstRoute: ReactNode;
  secondRoute: ReactNode;
  thirdRoute: ReactNode;
  fourthRoute: ReactNode;
  fifthRoute: ReactNode;
}
