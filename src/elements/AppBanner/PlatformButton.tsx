import React, { FC } from 'react';

type Props = {
  platform: 'ios' | 'android';
};

const labels: Record<Props['platform'], string> = {
  ios: 'iOS',
  android: 'Android',
};

export default ({ platform = 'ios' }: Props) => (
  <a href="#" className={`button ${platform}`}>{labels[platform]}</a>
);
