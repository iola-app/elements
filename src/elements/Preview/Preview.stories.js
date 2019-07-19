import { storiesOf } from '@storybook/html';
import { html } from 'common-tags'

import './Preview';

const stories = storiesOf('Elements|iola-preview', module);

/**
 * Stories
 */
stories.add('Default', () => html`
  <iola-preview />
`);
