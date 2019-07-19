import { addParameters, configure } from '@storybook/html';
import '@storybook/addon-console';

import loadStories from './stories';

// Option defaults:
addParameters({
  options: {},
});

configure(loadStories, module);
