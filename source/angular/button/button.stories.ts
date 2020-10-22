import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import Button from './button-component';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  component: Button,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  style: 'primary',
  size: 'medium',
  text: 'Primary',
};
