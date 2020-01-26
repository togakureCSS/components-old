import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './icon-component';

const stories = storiesOf('Icon', module);

stories.add('Padrão', () => (
  <div>
    <Icon name="adjust" size={24} />
    <Icon name="plus" size={24} />
  </div>
));
