import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Alert from './index';

Vue.component('Alert', Alert);

const stories = storiesOf('Alert', module);

stories.add('default', () => ({
  template: `
    <div>
      <Alert></Alert>
    </div>`
}));
