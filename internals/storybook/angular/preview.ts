import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

import docJson from './documentation.json';

const filtered = !docJson?.components
  ? docJson
  : {
      ...docJson,
      components: docJson.components.filter((c) => c.name !== 'ButtonComponent'),
    };

setCompodocJson(filtered);

addParameters({
  docs: {
    // inlineStories: true,
    iframeHeight: '60px',
  },
  options: {
    name: 'Togakure - Angular',
    url: 'https://github.com/tgkr/components',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: false,
    sidebarAnimations: true,
    selectedAddonPanel: undefined,
    enableShortcuts: false,
    isToolshown: true
  }
});
