<style lang='css'>
  @import '../../../node_modules/@descco/ui-core/lib/css/06-components/button.css';
</style>

<script>
import { styles } from '@descco/ui-core';
const classes = styles.button;
export default {
  name: 'ui-button',
  data: () => {
    return {
      classes
    };
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'medium'
    },
    outline: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
  }
};
</script>

<template>
  <button :class="[
    classes[type],
    classes[size],
    { [classes.outline]: outline },
    { [classes.active]: active },
    { [classes.rounded]: rounded },
    { [classes.circle]: circle },
    { [classes.block]: block },
    { [classes.loading]: loading }
  ]"
  :disabled="disabled"
  ><slot></slot></button>
</template>
