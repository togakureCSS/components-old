import { storiesOf } from '@storybook/angular';

import { ButtonComponent } from './index';

const stories = storiesOf('Button', module);

stories.add('with text', () => ({
  component: ButtonComponent,
  props: {
    text: 'Button',
  },
}));
