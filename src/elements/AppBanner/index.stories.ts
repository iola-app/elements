import { storiesOf } from '@storybook/html';
import { html } from 'common-tags';
import { defineElements } from '@iola/custom-element';

import AppBanner from '.';

defineElements({
  'iola-app-banner': AppBanner,
});

const stories = storiesOf('Elements|iola-app-banner', module);
stories.addDecorator(story => html`
  <div style="width: 220px; border: 1px dashed #eee; padding: 20px;">
    ${story()}
  </div>
`);

/**
 * Stories
 */
const text = "Go mobile with iola.<br />Find out <a href='#'>more</a>";
stories.add('Full banner', () => html`
  <iola-app-banner text="${text}"></iola-app-banner>
`);

stories.add('No logo', () => html`
  <iola-app-banner text="${text}" has-logo="no"></iola-app-banner>
`);

stories.add('No text', () => html`
  <iola-app-banner></iola-app-banner>
`);

stories.add('Buttons only', () => html`
  <iola-app-banner has-logo="no"></iola-app-banner>
`);
