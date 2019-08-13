import { storiesOf } from '@storybook/html';
import { color, select, withKnobs } from '@storybook/addon-knobs';

import './AppPreview';
import background from './background.jpg';
import logo from './logo.png';

const stories = storiesOf('Elements|iola-app-preview', module);
stories.addDecorator(withKnobs);

/**
 * Stories
 */
stories.add('Default', () => {
  const element = document.createElement('iola-app-preview');

  element.setAttribute('primary-color', color('Primary color', '#5259FF'));

  element.setAttribute('background', select('Background', {
    'No background': '',
    'Background image': background,
  }, background));

  element.setAttribute('logo', select('Logo', {
    'No logo': '',
    'Logo image': logo,
  }, logo));

  return element;
});
