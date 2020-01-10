import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Tag from './index';

Vue.component('Tag', Tag);

const stories = storiesOf('Tag', module);

stories.add('default', () => ({
  template: `
    <div>
      <Tag></Tag>
    </div>`
}));
