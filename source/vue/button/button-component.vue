<script>
import '../../../node_modules/@togakure/styles/lib/css/06-components/button.css';

import { styles } from '@togakure/styles';
const classes = styles.button;
export default {
  name: 'tog-button',
  data: () => {
    return {
      classes
    };
  },
  props: {
    label: {
      type: String,
      required: true,
    },
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
  @click="onClick"
  :disabled="disabled"
  >{{ label }}</button>
</template>
