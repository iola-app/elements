import AppBanner from './AppBanner';
import { createElement } from '@iola/custom-element';

import styles from './index.scss';

export default createElement(AppBanner, {
  attrs: ['has-logo', 'text'],
  styles,
  props: ({ hasLogo, ...props }) => ({
    ...props,
    hasLogo: hasLogo !== 'no',
  }),
});
     