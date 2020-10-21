import React from 'react';
import Button from './index';

import '../../../node_modules/@togakure/styles/lib/css/06-components/button.css';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  styleType: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  styleType: 'secondary',
  children: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  styleType: 'primary',
  children: 'Button',
  outline: true
};

export const Size = Template.bind({});
Size.args = {
  styleType: 'primary',
  children: 'Button',
  outline: true,
  size: 'small'
};
