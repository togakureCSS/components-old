import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import Alert from './alert-component';

export default {
  title: 'Alert',
  component: Alert,
  decorators: [
    moduleMetadata({
      declarations: [Alert],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Alert> = (args: Alert) => ({
  component: Alert,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  style: 'primary',
  text: 'Primary',
};
