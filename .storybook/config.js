import { addParameters, configure } from '@storybook/html';
import '@storybook/addon-console';

import loadStories from './stories';

// Option defaults:
addParameters({
  options: {
    /**
     * show addon panel as a vertical panel on the right
     * @type {Boolean}
     */
    addonPanelInRight: true,
  },
});

configure(loadStories, module);
