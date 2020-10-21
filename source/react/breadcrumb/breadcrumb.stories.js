import React from 'react';

import Breadcrumb from './index';

import '../../../node_modules/@togakure/styles/lib/css/06-components/breadcrumb.css';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      key: 'home',
      text: 'Home',
      url: '/home',
      handleClick: () => {}
    },
    {
      key: 'level1',
      text: 'Level 1',
      url: '/level1',
      handleClick: () => {}
    },
    {
      key: 'level2',
      text: 'Level 2'
    }
  ]
};