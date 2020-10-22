import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import Tooltip from './tooltip-component';

export default {
  title: 'Tooltip',
  component: Tooltip,
  decorators: [
    moduleMetadata({
      declarations: [Tooltip],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Tooltip> = (args: Tooltip) => ({
  component: Tooltip,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  style: 'primary',
  text: 'Primary',
};
