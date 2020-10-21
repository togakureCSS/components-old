import TogButton from './index';

export default {
  title: 'Button',
  component: TogButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    type: { control: { type: 'select', options: ['primary', 'info', 'warning', 'danger', 'transparent'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TogButton },
  template: '<tog-button @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  label: 'Text',
};