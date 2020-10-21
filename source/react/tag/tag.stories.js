import React from 'react';

import Tag from './index';

import '../../../node_modules/@togakure/styles/lib/css/06-components/tag.css';

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
  
const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  onRemove: () => {},
  children: name
};
