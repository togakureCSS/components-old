import React from 'react';
import { storiesOf } from '@storybook/react';
import { decorateAction } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';

import Alert from './index';

import '../../../node_modules/@togakure/styles/lib/css/06-components/alert.css';

const stories = storiesOf('Alert', module);

const firstArgAction = decorateAction([args => args.slice(0, 1)]);

const options = {
  Info: 'info',
  Warning: 'warning',
  Success: 'success',
  Danger: 'danger',
};

stories.add(
  'Padrão',
  () => (
    <div>
      <Alert
        type={select('Type', options, 'info')}
        showIcon={boolean('showIcon', false)}
        dark={boolean('Dark color', false)}
        headline={text('Headline', '')}
      >
        <p>{text('Text', 'Maecenas ipsum velit, consectetuer eu.')}</p>
      </Alert>
    </div>
  ),
  {
    info: 'This is the basic usage.',
  }
);

stories.add('Com ação para remover', () => (
  <div>
    <Alert
      type={select('Type', options, 'info')}
      showIcon={boolean('showIcon', false)}
      dark={boolean('Dark color', false)}
      headline={text('Headline', '')}
      onDismiss={firstArgAction('removed')}
    >
      <p>{text('Text', 'Maecenas ipsum velit, consectetuer eu.')}</p>
    </Alert>
  </div>
));
