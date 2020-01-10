<style lang='css'>
  @import '../../../node_modules/@togakure/styles/lib/css/06-components/alert.css';
</style>

<script>
import { styles } from '@togakure/styles';
const classes = styles.alert;
export default {
  name: 'tog-alert',
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
