import Tooltip from './index';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tooltip },
  template: '<tooltip @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  label: 'Text',
};