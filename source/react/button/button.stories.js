import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';

import '../../../node_modules/@descco/ui-core/lib/css/06-components/button.css';

const stories = storiesOf('Button', module);

stories.add('default', () => (
    <div>
      <Button onClick={action('clicked')}>Default</Button>&nbsp;
      <Button style="primary">Primary</Button>&nbsp;
      <Button style="success">Success</Button>&nbsp;
      <Button style="info">Info</Button>&nbsp;
      <Button style="warning">Warning</Button>&nbsp;
      <Button style="danger">Danger</Button>&nbsp;
      <Button style="transparent" size="none">Text</Button>&nbsp;
    </div>
  )
);
