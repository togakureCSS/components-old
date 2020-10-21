import React from 'react';

import Alert from './index';

import '../../../node_modules/@togakure/styles/lib/css/06-components/alert.css';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  styleType: 'primary',
  type: 'info',
  showIcon: false,
  dark: false,
  headline: 'Headline',
  children: 'Maecenas ipsum velit, consectetuer eu.',
};
