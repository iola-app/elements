import AppBanner from './AppBanner';
import { createElement } from '@iola/custom-element';

import styles from './index.scss';

export default createElement(AppBanner, {
  attrs: ['has-logo', 'has-ios', 'has-android', 'text', 'logo-url'],
  styles,
  props: ({ hasLogo, hasIos, hasAndroid, ...props }) => ({
    ...props,
    hasLogo: hasLogo !== 'no',
    hasIos: hasIos !== 'no',
    hasAndroid: hasAndroid !== 'no',
  }),
});
     