import Tag from './index';

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tag },
  template: '<tag @onClick="onClick" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  label: 'Text',
};