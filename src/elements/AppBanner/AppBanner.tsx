import React from 'react';
import Button from './PlatformButton';
import { userInstructionsUrl } from '@iola/config';

type Props = {
  text?: string;
  hasLogo?: boolean;
};

export default ({ text, hasLogo = true }: Props) => (
  <div className="banner">
    {hasLogo && <a className="logo" href={userInstructionsUrl}></a>}
    {text && <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>}
    <Button platform="ios" />
    <Button platform="android" />
  </div>
);
