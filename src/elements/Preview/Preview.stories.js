import { storiesOf } from '@storybook/html';
import { html } from 'common-tags'

import './Preview';

const stories = storiesOf('Elements', module);

/**
 * Stories
 */
stories.add('Preview', () => html`
  <iola-preview />
`);
