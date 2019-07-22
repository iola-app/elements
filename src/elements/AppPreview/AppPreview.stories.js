import { storiesOf } from '@storybook/html';
import { html } from 'common-tags'

import './AppPreview';

const stories = storiesOf('Elements|iola-app-preview', module);

/**
 * Stories
 */
stories.add('Default', () => html`
  <iola-app-preview />
`);
