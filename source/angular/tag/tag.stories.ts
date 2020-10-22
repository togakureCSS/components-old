import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';

import Tag from './tag-component';

export default {
  title: 'Tag',
  component: Tag,
  decorators: [
    moduleMetadata({
      declarations: [Tag],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Tag> = (args: Tag) => ({
  component: Tag,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  style: 'primary',
  text: 'Primary',
};
