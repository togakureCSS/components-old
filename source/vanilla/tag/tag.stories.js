import Tag from './index';

export default {
  title: 'Tag',
  argTypes: {
    styleType: { control: 'color' },
    onClick: { action: 'onClick' },
  },
};

const Template = (args) => Tag(args);

export const Default = Template.bind({});
Default.args = {
  styleType: 'info',
  text: 'Tag',
};