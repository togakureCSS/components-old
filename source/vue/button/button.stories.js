import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

import Button from './index';

Vue.component('Button', Button);

const stories = storiesOf('Button', module);

stories.add('with text', () => ({
  template: `
    <div>
      <Button>Test</Button>
      <Button type="primary">Test</Button>
      <Button type="info">Test</Button>
      <Button type="warning">Test</Button>
      <Button type="danger">Test</Button>
      <Button type="transparent" size="none">Test</Button>
    </div>`
}));
