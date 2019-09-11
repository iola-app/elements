import React, { FC } from 'react';

export type Props = {
  type?: string;
};

const AppBanner: FC<Props> = ({ type }) => (
  <div className="red">Hello Typescript {type}</div>
);

export default AppBanner;
