import Button from './index';

export default {
  title: 'Button',
  argTypes: {
    styleType: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => Button(args);

export const Default = Template.bind({});
Default.args = {
  styleType: 'primary',
  text: 'Primary',
  size: 'medium'
};