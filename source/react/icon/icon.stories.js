import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './icon-component';

const stories = storiesOf('Icon', module);

stories.add('Padrão', () => (
  <div>
    <Icon name="plus" size={24} />
  </div>
));
