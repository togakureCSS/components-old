import Alert from './index';

export default {
  title: 'Alert',
  argTypes: {
    styleType: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => Alert(args);

export const Default = Template.bind({});
Default.args = {
  styleType: 'info',
  text: 'Alerta',
};