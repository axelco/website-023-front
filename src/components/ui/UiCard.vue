<template>
  <div class="card">
    <div
      v-if="showHeader"
      :class="{ 'no-border': !showHeaderBorder }"
      class="card-header"
    >
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div
      v-if="showFooter"
      :class="{ 'no-border': !showFooterBorder }"
      class="card-footer"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  showHeader: {
    type: Boolean,
    default: true,
  },
  showHeaderBorder: {
    type: Boolean,
    default: true,
  },
  showFooter: {
    type: Boolean,
    default: true,
  },
  showFooterBorder: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
@import "src/assets/styles/theming";

.card {
  background-color: $body-secondary-bg;
  transition: $transition-base;
  box-shadow: 0.6rem 0.8rem 0.025rem darken($body-bg, 2%);
  border: 0;

  .card-body {
    padding: 1.5rem;
  }

  .card-header,
  .card-footer {
    background-color: transparent;
    padding: 1rem 1.5rem;
    border-color: $body-bg;
    &.no-border {
      border-width: 0;
    }
  }
}

@include color-mode(dark) {
  .card {
    background-color: $body-secondary-bg-dark;
    box-shadow: 0.6rem 0.8rem 0.025rem darken($body-bg-dark, 2%);
  }
  .card-header,
  .card-footer {
    border-color: $body-bg-dark;
  }
}
</style>
