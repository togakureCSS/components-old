import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import Breadcrumb from './breadcrumb-component';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  decorators: [
    moduleMetadata({
      declarations: [Breadcrumb],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Breadcrumb> = (args: Breadcrumb) => ({
  component: Breadcrumb,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  style: 'primary',
  text: 'Primary',
};
