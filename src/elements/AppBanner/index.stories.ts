import { storiesOf } from '@storybook/html';
import { html } from 'common-tags';
import { defineElements } from '@iola/custom-element';

import AppBanner from '.';

defineElements({
  'iola-app-banner': AppBanner,
});

const stories = storiesOf('Elements|iola-app-banner', module);

/**
 * Stories
 */
stories.add('Element', () => html`
  <iola-app-banner></iola-app-banner>
`);
