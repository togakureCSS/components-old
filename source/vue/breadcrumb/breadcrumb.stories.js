import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Breadcrumb from './index';

Vue.component('Breadcrumb', Breadcrumb);

const stories = storiesOf('Breadcrumb', module);

stories.add('default', () => ({
  template: `
    <div>
      <Breadcrumb></Breadcrumb>
    </div>`
}));
