import React from 'react';
import Tooltip from './index';

import '../../../node_modules/@togakure/styles/lib/css/06-components/tooltip.css';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
  
const Template = (args) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'texto de exemplo 1',
  content: 'Conteúdo do tooltip 1'
};
