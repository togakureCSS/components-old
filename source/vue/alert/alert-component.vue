<script>
import '../../../node_modules/@togakure/styles/lib/css/06-components/alert.css';

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
    label: {
      type: String,
      required: true,
    },
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
  ]">{{ label }}</div>
</template>
