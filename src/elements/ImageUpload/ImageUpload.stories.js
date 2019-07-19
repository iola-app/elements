import { storiesOf } from '@storybook/html';
import { html } from 'common-tags'

import './ImageUpload';

const stories = storiesOf('Elements|iola-image-upload', module);

/**
 * Stories
 */
stories.add('Default', () => html`
  <style>
    iola-image-upload {
      width: 200px;
      height: 200px;
    }
  </style>

  <iola-image-upload />
`);
