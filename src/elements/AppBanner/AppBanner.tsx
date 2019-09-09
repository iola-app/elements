import React, { FunctionComponent } from 'react';

export type Props = {
  type?: string;
};

const AppBanner = ({ type }: Props) => (
  <div>Hello Typescript {type}</div>
);

export default AppBanner;
