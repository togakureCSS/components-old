import Alert from './index';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Alert },
  template: '<alert @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  label: 'Text',
};