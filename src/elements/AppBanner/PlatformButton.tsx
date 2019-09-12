import React, { FC } from 'react';

type Props = {
  platform: 'ios' | 'android';
};

const labels: Record<Props['platform'], string> = {
  ios: 'iOS',
  android: 'Android',
};

export default ({ platform = 'ios' }: Props) => (
  <button className="platform-button {platform}">{labels[platform]}</button>
);
