import { storiesOf } from '@storybook/html';
import { html } from 'common-tags'

import './ImageUpload';
import backgroundImage from './background.jpg';

const stories = storiesOf('Elements|iola-image-upload', module);

/**
 * Stories
 */
stories.add('Default', () => html`
  <style>
    iola-image-upload {
      width: 200px;
      height: 320px;
    }
  </style>
  <iola-image-upload value="${backgroundImage}" />
`);
