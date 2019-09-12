import React from 'react';
import Button from './PlatformButton';
import { userInstructionsUrl } from '@iola/config';

type Props = {
  text?: string;
  hasLogo?: boolean;
  hasIos?: boolean;
  hasAndroid?: boolean;
};

export default ({ text, hasLogo = true, hasIos = true, hasAndroid = true }: Props) => (
  <div className="banner">
    {hasLogo && <a className="logo" href={userInstructionsUrl}></a>}
    {text && <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>}
    {hasIos && <Button platform="ios" />}
    {hasAndroid && <Button platform="android" />}
  </div>
);
