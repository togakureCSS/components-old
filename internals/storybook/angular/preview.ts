import { addParameters, addDecorator } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
// import { withLinks } from '@storybook/addon-links';

import '@storybook/addon-console';

addDecorator(withKnobs);
addDecorator(withNotes);
addDecorator(withInfo);

addParameters({
  backgrounds: [
    { name: 'Default', value: '#f5f5f5', default: true },
    { name: 'Light', value: '#fff' },
    { name: 'Dark', value: '#000' },
  ],
});

// addDecorator(withLinks);

addParameters({
  options: {
    name: 'Togakure - React',
    url: 'https://github.com/org-togakure/components',
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
