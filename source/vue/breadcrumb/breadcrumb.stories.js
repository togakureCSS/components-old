import Breadcrumb from './index';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Breadcrumb },
  template: '<breadcrumb @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  label: 'Text',
};