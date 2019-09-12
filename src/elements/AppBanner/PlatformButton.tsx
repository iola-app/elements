import React from 'react';
import { appleStoreUrl, googleStoreUrl } from '@iola/config';

type Platform = 'ios' | 'android';
type Options = { url: string, label: string };
type Props = {
  platform: Platform;
};

const options: Record<Platform, Options> = {
  ios: { label: 'iOS', url: appleStoreUrl },
  android: { label: 'Android', url: googleStoreUrl }
};

export default ({ platform = 'ios' }: Props) => (
  <a href={options[platform].url} className={`button ${platform}`}>
    {options[platform].label}
  </a>
);
