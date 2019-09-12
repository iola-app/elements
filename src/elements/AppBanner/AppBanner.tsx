import React from 'react';
import Logo from './Logo';
import Button from './PlatformButton';

type Props = {
  text?: string;
  hasLogo?: boolean;
};

export default ({ text, hasLogo = true }: Props) => (
  <div className="banner">
    {hasLogo && <Logo />}
    {text && <div dangerouslySetInnerHTML={{ __html: text }}></div>}
    <Button platform="ios" />
    <Button platform="android" />
  </div>
);
