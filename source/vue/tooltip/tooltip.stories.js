import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Tooltip from './index';

Vue.component('Tooltip', Tooltip);

const stories = storiesOf('Tooltip', module);

stories.add('default', () => ({
  template: `
    <div>
      <Tooltip></Tooltip>
    </div>`
}));
