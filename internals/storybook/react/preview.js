import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { withInfo } from '@storybook/addon-info';
import { withLinks } from '@storybook/addon-links';

import '@storybook/addon-console';

import styles from '!!style-loader!css-loader?modules=true!../../../node_modules/@togakure/styles/lib/css/07-pages/storybook.css';

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

addDecorator(withLinks);

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
    hierarchySeparator: /\/|\./, // matches a . or /
    hierarchyRootSeparator: /\|/, // matches a |
    sidebarAnimations: true,
    selectedAddonPanel: undefined,
    enableShortcuts: false,
    isToolshown: true
  }
});

addDecorator((fn, context) => {
  const { kind, story } = context;
  const title = kind;

  return (
    <div className={styles.container}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body { background: inherit; font-family: Arial, Helvetica, sans-serif; }
            .sb-show-main {
              background: none;
              border: none;
              color: #ccc;
              cursor: pointer;
              font-size: 14px;
              margin-bottom: 20px;
            }
          `,
        }}
      />
      <header className={styles.header}>
        <h2 className={styles.subtitle}>{`${title} - ${story}`}</h2>
      </header>
      <div className={styles.body}>{fn()}</div>
      {/* <div className={styles.footer}>Click the "?" mark at top-right to view the info.</div> */}
    </div>
  );
});
