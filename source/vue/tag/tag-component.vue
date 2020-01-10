<style lang='css'>
  @import '../../../node_modules/@togakure/styles/lib/css/06-components/tag.css';
</style>

<script>
import { styles } from '@togakure/styles';
const classes = styles.tag;
export default {
  name: 'tog-tag',
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
