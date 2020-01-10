<style lang='css'>
  @import '../../../node_modules/@togakure/styles/lib/css/06-components/breadcrumb.css';
</style>

<script>
import { styles } from '@togakure/styles';
const classes = styles.breadcrumb;
export default {
  name: 'tog-breadcrumb',
  data: () => {
    return {
      classes
    };
  },
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
  }
};
</script>

<template>
  <div :class="[
    classes[type]
  ]"><slot></slot></div>
</template>
