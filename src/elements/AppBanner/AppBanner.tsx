import React from 'react';
import Button from './PlatformButton';

type Props = {
  text?: string;
  hasLogo?: boolean;
};

const instructionsUrl = 'https://iola.app/for-users/';

export default ({ text, hasLogo = true }: Props) => (
  <div className="banner">
    {hasLogo && <a className="logo" href={instructionsUrl}></a>}
    {text && <div className="text" dangerouslySetInnerHTML={{ __html: text }}></div>}
    <Button platform="ios" />
    <Button platform="android" />
  </div>
);
