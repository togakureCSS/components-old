import Tooltip from './index';

export default {
  title: 'Tooltip',
  argTypes: {
    styleType: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => Tooltip(args);

export const Default = Template.bind({});
Default.args = {
  styleType: 'info',
  text: 'Tooltip',
};