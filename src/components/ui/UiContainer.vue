<template>
  <div :class="`${setContainer} ${props.size}`">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  size: {
    type: String,
    default: "",
  },
  fluid: Boolean,
});

const setContainer = computed(() => {
  if (props.fluid) {
    return "container-fluid";
  }

  return "container";
});
</script>

<style lang="scss">
@import "@/assets/styles/theming";

.container {
  &.sm {
    max-width: 560px;
  }

  &.md {
    max-width: 960px;
  }

  &.lg {
    max-width: 1240px;
  }

  &.xl {
    max-width: 1440px;
  }
}
</style>
