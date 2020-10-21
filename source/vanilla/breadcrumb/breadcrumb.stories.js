import Breadcrumb from './index';

export default {
  title: 'Breadcrumb',
  argTypes: {
    styleType: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => Breadcrumb(args);

export const Default = Template.bind({});
Default.args = {
  styleType: 'info',
  text: 'Breadcrumb',
};