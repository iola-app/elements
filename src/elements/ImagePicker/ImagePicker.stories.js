import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { boolean, button, withKnobs } from '@storybook/addon-knobs';

import './ImagePicker';
import backgroundImage from './background.jpg';

const stories = storiesOf('Elements|iola-image-picker', module);
stories.addDecorator(withKnobs);

/**
 * Stories
 */
stories.add('Default', () => {
  const element = document.createElement('iola-image-picker');
  element.addEventListener('change', action('Change'));

  if (boolean('Has default value', true)) {
    element.setAttribute('value', backgroundImage);
  }

  button('Open file', () => {
    element.open();
  });

  return element;
});
