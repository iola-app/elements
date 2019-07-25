import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';
import { color, withKnobs } from '@storybook/addon-knobs';

import './ColorPicker';

const stories = storiesOf('Elements|iola-color-picker', module);
stories.addDecorator(withKnobs);

/**
 * Stories
 */
stories.add('Default', () => {
  const element = document.createElement('iola-color-picker');

  element.setAttribute('value', color('Value'));
  element.addEventListener('change', action('Change'));

  return element;
});
